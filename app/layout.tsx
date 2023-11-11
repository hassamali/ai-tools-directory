import type { Metadata } from 'next'
import Head from 'next/head'
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
            <Head>
              {/* Other head elements */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-XWTMN9KD6M`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                      window.dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'G-XWTMN9KD6M');
                  `,
                }}
              />
            </Head>
            <body className={'${Inter.className} bg-slate-800 text-slate-100 container mx-auto p-4'}>
              {children}
            </body>
    </html>
  )
}
