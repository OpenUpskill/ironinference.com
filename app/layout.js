import './globals.css'

export const metadata = {
  title: 'IronInference',
  description: 'AI Execution Control Plane',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}