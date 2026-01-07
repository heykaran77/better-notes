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

interface ResetPasswordEmailProps {
  name: string;
  resetPasswordUrl: string;
}

const ResetPasswordEmail = ({
  name,
  resetPasswordUrl,
}: ResetPasswordEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[480px] mx-auto">
            <Section>
              <Text className="text-[24px] font-bold text-gray-900 mb-[16px] mt-0">
                Reset your password
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] mt-0 leading-[24px]">
                Hi {name},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[32px] mt-0 leading-[24px]">
                We received a request to reset your password. Click the button
                below to create a new password for your account.
              </Text>

              <Button
                href={resetPasswordUrl}
                className="bg-red-600 text-white px-[24px] py-[12px] rounded-[6px] text-[16px] font-medium no-underline box-border">
                Reset Password
              </Button>

              <Text className="text-[14px] text-gray-500 mt-[32px] mb-0 leading-[20px]">
                This reset link will expire in 1 hour. If you didn't request a
                password reset, you can safely ignore this email.
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
export default ResetPasswordEmail;
