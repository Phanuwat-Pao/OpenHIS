import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Suspense } from "react";
import PostHogPageView from "~/posthog/posthog.pageview";
import { PHProvider } from "~/posthog/posthog.provider";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <PHProvider>
          <Suspense>
            <PostHogPageView />
          </Suspense>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </PHProvider>
      </body>
    </html>
  );
}
