import '../globals.css';
export const metadata = {
  title: 'Sneakers',
  description: 'Sneakers',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className='p-2'>{children}</body>
    </html>
  )
}
