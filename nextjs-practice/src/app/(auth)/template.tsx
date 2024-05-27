
"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import './styles.css';

const  navLink = [
  {name: "Register", href: "/register"},
  {name: "Login", href: "/login"},
  {name: "ForgotPassword", href: "/forgot-password"},
]

export default function AuthLayout({
  children
}:{
children: React.ReactNode
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)}/>

      </div>
      {navLink.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={
              isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'
            }
          >{link.name}</Link>
        )
      })
      }
     {children}
     {/* <h2>Feature products</h2> */}
    </div>
  )
}