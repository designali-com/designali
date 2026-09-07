import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { lastLoginMethod, organization } from "better-auth/plugins";
import OrganizationInvitationEmail from "@/emails/organization-invitation";
import ForgotPasswordEmail from "@/emails/reset-password";
import VerifyEmail from "@/emails/verify-email";
import { db } from "@/src/db/drizzle";
import { schema } from "@/src/db/schema";
import { getActiveOrganization } from "@/src/server/organizations";
import { admin, member, owner } from "./permissions";
import { admin as adminPlugin } from "better-auth/plugins";
import { resend } from "../resend";
import WelcomeEmail from "@/emails/welcome";


export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: user.email,
        subject: "Verify your email",
        react: VerifyEmail({ username: user.name, verifyUrl: url }),
      });
    },
    sendOnSignUp: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: user.email,
        subject: "Reset your password",
        react: ForgotPasswordEmail({
          username: user.name,
          resetUrl: url,
          userEmail: user.email,
        }),
      });
    },
    requireEmailVerification: true,
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await resend.emails.send({
            from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
            to: user.email,
            subject: "Welcome to Designali 🎉",
            react: WelcomeEmail({
              username: user.name,
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
            }),
          })
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          const activeOrganization = await getActiveOrganization(
            session.userId
          );
          return {
            data: {
              ...session,
              activeOrganizationId: activeOrganization?.id,
            },
          };
        },
      },
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [
    adminPlugin(),
    organization({
      sendInvitationEmail: async (data) => {
        const inviteLink = `${process.env.NEXT_PUBLIC_SITE_URL}/api/accept-invitation/${data.id}`;

        await resend.emails.send({
          from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
          to: data.email,
          subject: "You've been invited to join our organization",
          react: OrganizationInvitationEmail({
            email: data.email,
            invitedByUsername: data.inviter.user.name,
            invitedByEmail: data.inviter.user.email,
            teamName: data.organization.name,
            inviteLink,
          }),
        });
      },
      roles: {
        owner,
        admin,
        member,
      },
    }),
    lastLoginMethod(),
    nextCookies(),
  ],
});