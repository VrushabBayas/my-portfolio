import type { Metadata } from 'next';
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vrushabh Bayas | Software Engineer',
  description:
    'Portfolio of Vrushabh Bayas - Frontend-focused Software Engineer with 7+ years of experience building performance-driven UIs.',
  keywords: [
    'Vrushabh Bayas',
    'Software Engineer',
    'Frontend Developer',
    'React',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: 'Vrushabh Bayas' }],
  creator: 'Vrushabh Bayas',
  metadataBase: new URL('https://vrushabbayas.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vrushabbayas.dev',
    siteName: 'Vrushabh Bayas Portfolio',
    title: 'Vrushabh Bayas | Software Engineer',
    description:
      'Portfolio of Vrushabh Bayas - Frontend-focused Software Engineer with 6+ years of experience building performance-driven UIs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vrushabh Bayas | Software Engineer',
    description:
      'Portfolio of Vrushabh Bayas - Frontend-focused Software Engineer with 6+ years of experience building performance-driven UIs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
