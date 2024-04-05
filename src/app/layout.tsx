import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - CyberVC',
    default: 'CyberVC - A community-driven data in VC conference',
  },
  description:
    'At Cyber VC, participants explore the forefront of tech in venture capital, learning to implement sophisticated strategies that remain under the radar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
