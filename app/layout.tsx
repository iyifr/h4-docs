import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, Ceviche_One } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

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
