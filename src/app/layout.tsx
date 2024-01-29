import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import { Alice } from 'next/font/google';
import { Metadata, Viewport } from 'next';

const alice = Alice({
  subsets: ['latin'],
  variable: '--font-alice',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Spore`s Journey ',
  description: 'Developed by Volcano',
};

export const viewport: Viewport = {
  themeColor: 'black',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={alice.variable}
    >
      <Script
        id="init-scrollbar-top"
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
