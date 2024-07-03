import React from 'react'
import HomeNavbar from '../components/Home-Navbar'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <>
        <main>
            {children}
        </main>
    </>
  )
}
