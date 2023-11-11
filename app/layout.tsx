import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Tools Directory 2023',
  description: 'Discover a comprehensive directory of AI tools covering image generation, code generation, video editing, music generation, translation, customer service, chatbots, marketing, sales, no-code tools, small businesses, education, healthcare, finance, the metaverse, ethics, and responsible development. Find the right AI tools for your needs and boost your productivity, efficiency, and creativity.',
  keywords: 'ai tools, ai image generation'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
              <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-S77L3RL5KR`}
              />
              <Script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                      window.dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'G-S77L3RL5KR');
                  `,
                }}
              />
            <body className={'${Inter.className} bg-slate-800 text-slate-100 container mx-auto p-4'}>
              {children}
            </body>
    </html>
  )
}
