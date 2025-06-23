import type { Metadata } from "next";
import "@/styles/globals.css";
import { AsideButtons } from "@/components/aside-buttons";
import { notoSansKR } from "../styles/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.PRODUCTION_URL}`),
  title: {
    template: "%s | 최은하의 포트폴리오 사이트",
    default: "최은하의 포트폴리오 사이트",
  },
  description: "최은하의 포트폴리오 사이트입니다.",
  icons: {
    icon: "app/favicon.ico",
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.className} antialiased w-full overflow-x-hidden bg-bg-default`}
      >
        <div className="px-4 py-4 lg:px-[100px] lg:py-[80px]">
          <div className="lg:flex lg:items-start overflow-hidden">
            <AsideButtons path="/" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
