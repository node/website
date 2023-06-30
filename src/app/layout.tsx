import './globals.css'

export const metadata = {
  title: '平台工程社区 · 中国',
  description: '平台工程',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
