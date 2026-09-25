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
  
  interface SubmitToolEmailProps {
    title: string
    email: string
    description: string
    link: string
    madeBy: string
    category: string
    isAdminCopy?: boolean // true if sending to you, false if sending confirmation to user
  }
  
  const SubmitToolEmail = ({
    title,
    email,
    description,
    link,
    madeBy,
    category,
    isAdminCopy = false,
  }: SubmitToolEmailProps) => {
    return (
      <Tailwind>
        <Html>
          <Head />
          <Body className="m-0 bg-[#f5f5f5] p-0 font-sans">
            <Preview>
              {isAdminCopy
                ? `New Tool Submission: ${title}`
                : `We received your tool submission: ${title}`}
            </Preview>
  
            <Container className="mx-auto max-w-[640px] px-4 py-12">
              <Section className="overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white">
                
                {/* Header */}
                <Section className="px-10 pb-6 pt-10">
                  <Logo className="h-8 w-fit" />
                </Section>
  
                {/* Hero */}
                <Section className="px-10 pb-12 pt-6">
                  <Text className="m-0 text-[36px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#111111]">
                    {isAdminCopy ? "New Tool Submitted!" : "Thanks for submitting!"}
                  </Text>
  
                  <Text className="m-0 mt-4 text-[16px] leading-[26px] text-[#666666]">
                    {isAdminCopy
                      ? `A new tool has been submitted by ${madeBy} (${email}).`
                      : `Hey ${madeBy}, we have received your tool submission. Our team will review it shortly.`}
                  </Text>
                </Section>
  
                {/* Tool Details Card */}
                <Section className="bg-[#fafafa] px-10 py-10 border-t border-b border-[#e5e5e5]">
                  <Text className="m-0 text-[14px] font-medium text-[#111111] mb-4">
                    Submission Details:
                  </Text>
  
                  <Row className="py-2 border-b border-[#e5e5e5]">
                    <Column className="w-[120px]">
                      <Text className="m-0 text-[13px] font-medium text-[#999999]">Title</Text>
                    </Column>
                    <Column>
                      <Text className="m-0 text-[14px] font-medium text-[#111111]">{title}</Text>
                    </Column>
                  </Row>
  
                  <Row className="py-2 border-b border-[#e5e5e5]">
                    <Column className="w-[120px]">
                      <Text className="m-0 text-[13px] font-medium text-[#999999]">Category</Text>
                    </Column>
                    <Column>
                      <Text className="m-0 text-[14px] font-medium text-[#111111]">{category}</Text>
                    </Column>
                  </Row>
  
                  <Row className="py-2 border-b border-[#e5e5e5]">
                    <Column className="w-[120px]">
                      <Text className="m-0 text-[13px] font-medium text-[#999999]">Made By</Text>
                    </Column>
                    <Column>
                      <Text className="m-0 text-[14px] font-medium text-[#111111]">{madeBy} ({email})</Text>
                    </Column>
                  </Row>
  
                  <Row className="py-2 border-b border-[#e5e5e5]">
                    <Column className="w-[120px]">
                      <Text className="m-0 text-[13px] font-medium text-[#999999]">Link</Text>
                    </Column>
                    <Column>
                      <Link href={link} className="text-[14px] text-[#000000] underline">
                        {link}
                      </Link>
                    </Column>
                  </Row>
  
                  <Row className="py-4">
                    <Column className="w-[120px] align-top">
                      <Text className="m-0 text-[13px] font-medium text-[#999999]">Description</Text>
                    </Column>
                    <Column className="align-top">
                      <Text className="m-0 text-[14px] leading-[22px] text-[#666666]">{description}</Text>
                    </Column>
                  </Row>
  
                  <Section className="mt-6">
                    <Button
                      href={link}
                      className="inline-block bg-[#000] px-5 py-3 text-center text-[14px] font-medium text-white"
                    >
                      View Tool Live
                    </Button>
                  </Section>
                </Section>
  
                {/* Footer */}
                <Section className="px-10 py-10">
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
                  <Text className="m-0 mt-8 text-[11px] leading-[18px] text-[#999999]">
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
  
  SubmitToolEmail.PreviewProps = {
    title: "Designali UI",
    email: "hello@designali.com",
    description: "A comprehensive library of UI components and templates.",
    link: "https://designali.com/tools",
    madeBy: "Ali",
    category: "UI Components",
    isAdminCopy: false,
  } satisfies SubmitToolEmailProps
  
  export default SubmitToolEmail