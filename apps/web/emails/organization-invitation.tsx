import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

import { Logo } from "@workspace/ui/designali/logo"

interface OrganizationInvitationEmailProps {
  email: string
  invitedByUsername: string
  invitedByEmail: string
  teamName: string
  inviteLink: string
}

const OrganizationInvitationEmail = ({
  email,
  invitedByUsername,
  invitedByEmail,
  teamName,
  inviteLink,
}: OrganizationInvitationEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />

        <Body className="m-0 bg-[#f5f5f5] p-0 font-sans">
          <Preview>
            You&apos;ve been invited to join {teamName} on Designali
          </Preview>

          <Container className="mx-auto max-w-[640px] px-4 py-12">
            <Section className="overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white">

              {/* Header */}
              <Section className="px-10 pb-6 pt-10">
                <Logo className="h-8 w-fit" />
              </Section>

              {/* Hero */}
              <Section className="px-10 pb-16 pt-10">
                <Text className="m-0 mb-5 text-[13px] font-medium uppercase tracking-[1.5px] text-[#999999]">
                  You&apos;re invited
                </Text>

                <Text className="m-0 text-[46px] font-semibold leading-[1.05] tracking-[-2px] text-[#111111]">
                  Join your
                  <br />
                  team.
                </Text>

                <Text className="m-0 mt-6 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Hey there,
                </Text>

                <Text className="m-0 mt-2 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  <strong className="text-[#111111]">
                    {invitedByUsername}
                  </strong>{" "}
                  has invited you to join{" "}
                  <strong className="text-[#111111]">{teamName}</strong> on
                  Designali.
                </Text>

                <Text className="m-0 mt-4 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Accept the invitation to collaborate with your team,
                  access shared resources, and start building together.
                </Text>

                <Section className="mt-8">
                  <Button
                    href={inviteLink}
                    className="inline-block rounded-[6px] bg-[#000000] px-6 py-3.5 text-center text-[14px] font-medium text-white no-underline"
                  >
                    Accept Invitation
                  </Button>
                </Section>
              </Section>

              {/* Divider */}
              <Section className="border-t border-[#e5e5e5]" />

              {/* Invitation Details */}
              <Section className="bg-[#fafafa] px-10 py-16">
                <Text className="m-0 max-w-[450px] text-[36px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#111111]">
                  Your invitation.
                </Text>

                <Text className="m-0 mt-5 max-w-[480px] text-[15px] leading-[24px] text-[#666666]">
                  Here&apos;s everything you need to know about your
                  Designali workspace invitation.
                </Text>

                <Section className="mt-10">
                  <Section className="border-b border-[#e5e5e5] py-6">
                    <Text className="m-0 text-[13px] font-medium uppercase tracking-[1px] text-[#999999]">
                      Workspace
                    </Text>

                    <Text className="m-0 mt-2 text-[18px] font-medium leading-[24px] text-[#111111]">
                      {teamName}
                    </Text>
                  </Section>

                  <Section className="border-b border-[#e5e5e5] py-6">
                    <Text className="m-0 text-[13px] font-medium uppercase tracking-[1px] text-[#999999]">
                      Invited by
                    </Text>

                    <Text className="m-0 mt-2 text-[18px] font-medium leading-[24px] text-[#111111]">
                      {invitedByUsername}
                    </Text>

                    <Text className="m-0 mt-1 text-[14px] leading-[22px] text-[#737373]">
                      {invitedByEmail}
                    </Text>
                  </Section>

                  <Section className="py-6">
                    <Text className="m-0 text-[13px] font-medium uppercase tracking-[1px] text-[#999999]">
                      Your email
                    </Text>

                    <Text className="m-0 mt-2 text-[18px] font-medium leading-[24px] text-[#111111]">
                      {email}
                    </Text>
                  </Section>
                </Section>
              </Section>

              {/* Fallback Link */}
              <Section className="px-10 py-16">
                <Text className="m-0 text-[13px] font-medium uppercase tracking-[1.5px] text-[#999999]">
                  Having trouble?
                </Text>

                <Text className="m-0 mt-5 max-w-[480px] text-[15px] leading-[24px] text-[#666666]">
                  If the button doesn&apos;t work, copy and paste the link
                  below into your browser.
                </Text>

                <Section className="mt-6 rounded-[6px] bg-[#f5f5f5] p-4">
                  <Link
                    href={inviteLink}
                    className="break-all text-[13px] leading-[20px] text-[#111111] underline"
                  >
                    {inviteLink}
                  </Link>
                </Section>
              </Section>
 

              {/* Footer */}
              <Section className="border-t border-[#e5e5e5] px-10 py-10">
                <Text className="m-0 text-[18px] font-semibold text-[#111111]">
                  designali
                </Text>

                <Text className="m-0 mt-2 text-[13px] text-[#737373]">
                  Design Se Code Tak
                </Text>

                <Section className="mt-8">
                  <Link
                    href="https://designali.com"
                    className="mr-5 text-[13px] text-[#666666] underline"
                  >
                    Website
                  </Link>

                  <Link
                    href="https://x.com/designali_in"
                    className="mr-5 text-[13px] text-[#666666] underline"
                  >
                    X
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/designali-com"
                    className="text-[13px] text-[#666666] underline"
                  >
                    LinkedIn
                  </Link>
                </Section>

                <Text className="m-0 mt-8 text-[11px] leading-[18px] text-[#999999]">
                  This invitation was sent to {email}.
                  <br />
                  If you weren&apos;t expecting this invitation, you can
                  safely ignore this email.
                  <br />
                  © {new Date().getFullYear()} Designali. All rights reserved.
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

OrganizationInvitationEmail.PreviewProps = {
  email: "ali@example.com",
  invitedByUsername: "John Doe",
  invitedByEmail: "john@example.com",
  teamName: "Designali Team",
  inviteLink: "https://designali.com/accept-invitation",
} satisfies OrganizationInvitationEmailProps

export default OrganizationInvitationEmail