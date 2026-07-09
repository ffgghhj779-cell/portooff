import type { Metadata, Viewport } from 'next';
import { Alexandria, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ClientProviders } from '@/components/ClientProviders';
import { baseMetadata } from '@/lib/metadata';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const alexandria = Alexandria({
  variable: '--font-arabic',
  subsets: ['arabic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('tasami-preloader') === '1') {
                  document.documentElement.classList.add('preloader-skipped');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${alexandria.variable} font-sans antialiased selection:bg-white/10 selection:text-white`}
        suppressHydrationWarning
      >
        <ClientProviders>{children}</ClientProviders>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
