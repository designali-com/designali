 
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"
import { Logo } from "@workspace/ui/designali/logo"

interface WelcomeEmailProps {
  username: string
  url: string
}

type WelcomeTip = {
  title: string
  description: string
}

const WelcomeEmail = ({ username, url }: WelcomeEmailProps) => { 
  const tips: WelcomeTip[] = [
    {
      title: "Explore UI components",
      description:
        "Browse ready-to-use components built to help you move from design to production faster.",
    },
    {
      title: "Check out the templates",
      description:
        "Start with carefully crafted templates and layouts instead of building everything from scratch.",
    },
    {
      title: "Build with Designali",
      description:
        "Use our components, resources, and experiments to turn your ideas into real interfaces.",
    },
  ]

  return (
    <Tailwind>
      <Html>
        <Head />

        <Body className="m-0 bg-[#f5f5f5] p-0 font-sans">
          <Preview>
            Welcome to Designali — your account is ready
          </Preview>

          <Container className="mx-auto max-w-[640px] px-4 py-12">
            <Section className="overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white">
              
              {/* Header */}
              <Section className="px-10 pb-6 pt-10">
                <Logo className="h-8 w-fit"/>
              </Section>

              {/* Hero */}
              <Section className="px-10 pb-16 pt-10">
                
                <Text className="m-0 text-[46px] font-semibold leading-[1.05] tracking-[-2px] text-[#111111]">
                  Welcome to
                  <br />
                  Designali.
                </Text>

                <Text className="m-0 mt-6 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Hey {username},
                </Text>

                <Text className="m-0 mt-2 max-w-[500px] text-[16px] leading-[26px] text-[#666666]">
                  Thanks for signing up for Designali. Your account has been
                  successfully created and you&apos;re all set to start
                  building.
                </Text>

                <Section className="mt-8">
                  <Button
                    href={url}
                     className="inline-block bg-[#000] px-6 py-3.5 text-center text-[14px] font-medium text-white"
                  >
                    Explore Designali
                  </Button>
                </Section>
              </Section>

              {/* Divider */}
              <Section className="border-t border-[#e5e5e5]" />

              {/* First Week */}
              <Section className="bg-[#fafafa] px-10 py-16">
                <Text className="m-0 max-w-[450px] text-[36px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#111111]">
                  Start building.
                </Text>

                <Text className="m-0 mt-5 max-w-[480px] text-[15px] leading-[24px] text-[#666666]">
                  Here are a few things you can explore first. Everything is
                  designed to help you go from design to code faster.
                </Text>

                <Section className="mt-10">
                  <Text className="m-0 text-[14px] font-medium text-[#111111]">
                    What to explore first:
                  </Text>

                  {tips.map((tip, index) => (
                    <Section
                      key={tip.title}
                      className="border-b border-[#e5e5e5] py-6"
                    >
                      <Row>
                        <Column className="w-[36px] align-top">
                          <Text className="m-0 text-[13px] font-medium text-[#999999]">
                            0{index + 1}
                          </Text>
                        </Column>

                        <Column className="align-top">
                          <Text className="m-0 text-[18px] font-medium leading-[24px] text-[#111111]">
                            {tip.title}
                          </Text>

                          <Text className="m-0 mt-2 max-w-[420px] text-[14px] leading-[22px] text-[#737373]">
                            {tip.description}
                          </Text>
                        </Column>
                      </Row>
                    </Section>
                  ))}
                </Section>
              </Section>

              {/* Brand Statement */}
              <Section className="px-10 py-16">
              

                <Text className="m-0 mt-5 max-w-[500px] text-[32px] font-semibold leading-[1.15] tracking-[-1px] text-[#111111]">
                  Design Se Code Tak.
                </Text>

                <Text className="m-0 mt-4 max-w-[480px] text-[15px] leading-[24px] text-[#666666]">
                  A place for designers and developers to explore better
                  interfaces, reusable components, and modern design
                  engineering.
                </Text>

                <Section className="mt-8">
                  <Button
                    href={url}
                    className="inline-block border border-[#d4d4d4] bg-white px-5 py-3 text-center text-[14px] font-medium text-[#111111]"
                  >
                    Visit Designali
                  </Button>
                </Section>
              </Section>

              {/* Footer */}
              <Section className="border-t border-[#e5e5e5] px-10 py-10">
                <Row>
                  <Column className="w-full">
                    <Text className="m-0 text-[18px] font-semibold text-[#111111]">
                      designali
                    </Text>

                    <Text className="m-0 mt-2 text-[13px] text-[#737373]">
                      Design Se Code Tak
                    </Text>
                  </Column>
                </Row>

                <Row className="mt-8">
                  <Column>
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
                      href="https://www.linkedin.comhttps://www.linkedin.com/company/designali-com"
                      className="text-[13px] text-[#666666] underline"
                    >
                      LinkedIn
                    </Link>
                  </Column>
                </Row>

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

WelcomeEmail.PreviewProps = {
  username: "Ali",
  url: "https://designali.com",
} satisfies WelcomeEmailProps

export default WelcomeEmail 