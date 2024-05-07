export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<title>Next JS</title>
		<body>{children}</body>
    </html>
  )
}