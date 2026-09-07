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

interface VerifyEmailProps {
  username: string
  verifyUrl: string
}

const VerifyEmail = ({ username, verifyUrl }: VerifyEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />

        <Body className="m-0 bg-[#f5f5f5] p-0 font-sans">
          <Preview>
            Verify your Designali email address
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
                  Almost there
                </Text>

                <Text className="m-0 text-[46px] font-semibold leading-[1.05] tracking-[-2px] text-[#111111]">
                  Verify your
                  <br />
                  email address.
                </Text>

                <Text className="m-0 mt-6 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Hey {username},
                </Text>

                <Text className="m-0 mt-2 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Thanks for joining Designali. Please verify your email
                  address to complete your registration and get access to
                  your account.
                </Text>

                <Section className="mt-8">
                  <Button
                    href={verifyUrl}
                    className="inline-block rounded-[6px] bg-[#000000] px-6 py-3.5 text-center text-[14px] font-medium text-white no-underline"
                  >
                    Verify Email Address
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
                    href={verifyUrl}
                    className="break-all text-[13px] leading-[20px] text-[#111111] underline"
                  >
                    {verifyUrl}
                  </Link>
                </Section>

                <Text className="m-0 mt-6 max-w-[480px] text-[13px] leading-[20px] text-[#999999]">
                  This verification link will expire in 24 hours. If you
                  didn&apos;t create a Designali account, you can safely
                  ignore this email.
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
                  You received this email because you created a Designali
                  account.
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

VerifyEmail.PreviewProps = {
  username: "Ali",
  verifyUrl: "https://designali.com/verify-email",
} satisfies VerifyEmailProps

export default VerifyEmail