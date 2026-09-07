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

interface ForgotPasswordEmailProps {
  username: string
  resetUrl: string
  userEmail: string
}

const ForgotPasswordEmail = ({
  username,
  resetUrl,
  userEmail,
}: ForgotPasswordEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />

        <Body className="m-0 bg-[#f5f5f5] p-0 font-sans">
          <Preview>
            Reset your Designali password
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
                  Account security
                </Text>

                <Text className="m-0 text-[46px] font-semibold leading-[1.05] tracking-[-2px] text-[#111111]">
                  Reset your
                  <br />
                  password.
                </Text>

                <Text className="m-0 mt-6 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Hey {username},
                </Text>

                <Text className="m-0 mt-2 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  We received a request to reset the password for your
                  Designali account associated with{" "}
                  <strong className="text-[#111111]">{userEmail}</strong>.
                </Text>

                <Text className="m-0 mt-4 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Click the button below to create a new password.
                </Text>

                <Section className="mt-8">
                  <Button
                    href={resetUrl}
                    className="inline-block rounded-[6px] bg-[#000000] px-6 py-3.5 text-center text-[14px] font-medium text-white no-underline"
                  >
                    Reset Password
                  </Button>
                </Section>
              </Section>

              {/* Divider */}
              <Section className="border-t border-[#e5e5e5]" /> 
              
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
                    href={resetUrl}
                    className="break-all text-[13px] leading-[20px] text-[#111111] underline"
                  >
                    {resetUrl}
                  </Link>
                </Section>

                <Text className="m-0 mt-6 max-w-[480px] text-[13px] leading-[20px] text-[#999999]">
                  If you didn&apos;t request a password reset, no action is
                  required.
                </Text>
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
                  This email was sent to {userEmail}.
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

ForgotPasswordEmail.PreviewProps = {
  username: "Ali",
  resetUrl: "https://designali.com/reset-password",
  userEmail: "ali@example.com",
} satisfies ForgotPasswordEmailProps

export default ForgotPasswordEmail