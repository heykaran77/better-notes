import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Tailwind,
} from "@react-email/components";

interface VerificationEmailProps {
  name: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  name,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[480px] mx-auto">
            <Section>
              <Text className="text-[24px] font-bold text-gray-900 mb-[16px] mt-0">
                Verify your email address
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] mt-0 leading-[24px]">
                Hi {name},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[32px] mt-0 leading-[24px]">
                Please click the button below to verify your email address and
                complete your account setup.
              </Text>

              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[24px] py-[12px] rounded-[6px] text-[16px] font-medium no-underline box-border">
                Verify Email Address
              </Button>

              <Text className="text-[14px] text-gray-500 mt-[32px] mb-0 leading-[20px]">
                This verification link will expire in 24 hours. If you didn't
                create an account, you can safely ignore this email.
              </Text>
            </Section>

            <Section className="mt-[40px] pt-[24px] border-t border-gray-200">
              <Text className="text-[12px] text-gray-400 m-0 text-center">
                © 2026 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-400 m-0 text-center">
                123 Business Street, Bengaluru, IN 560001
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
