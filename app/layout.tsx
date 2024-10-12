import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Metadata } from 'next';
import { Ceviche_One } from 'next/font/google';
import type { ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'H4.dart',
  description: 'A delightful dart framework for the web.',
  keywords: ['Dart', 'Server', 'Framework', 'Dart'],
  openGraph: {
    type: "website",
    url: "h4-tau.vercel.app",
    description: "A delightful framework for building web servers with dart.",
    siteName: "H4 Dart."
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H4.dart',
    description: 'A delightful dart framework for the web',
    creator: '@iyifrr',
  }
}

const ceviche = Ceviche_One({ weight: "400", display: 'swap', variable: "--font-ceviche", subsets: ["latin"] })

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${ceviche.variable} font-code`} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
