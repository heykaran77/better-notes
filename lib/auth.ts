import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import VerificationEmail from "@/components/emails/VerificationEmail";
import ResetPasswordEmail from "@/components/emails/ResetPasswordEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const { data, error } = await resend.emails.send({
        from: "BetterNotes <onboarding@resend.dev>",
        to: [user.email],
        subject: "Verify your email address",
        react: VerificationEmail({
          name: user.name,
          verificationUrl: url,
        }),
      });
    },
    sendOnSignUp: true,
  },
  emailAndPassword: {
    requireEmailVerification: true, // Email Should be verified to login
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      const { data, error } = await resend.emails.send({
        from: "BetterNotes <onboarding@resend.dev>",
        to: [user.email],
        subject: "Reset your password",
        react: ResetPasswordEmail({
          name: user.name,
          resetPasswordUrl: url,
        }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite",
    schema: schema,
  }),
  plugins: [nextCookies()],
});
