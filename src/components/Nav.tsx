"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavProps = {
  containerStyles: string,
  linkStyles: string,
  underlineStyles?: string
  onClick?: () => void
}

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" }
]

const Nav = ({ containerStyles, linkStyles, underlineStyles, onClick }: NavProps) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return <Link onClick={onClick} href={link.path} key={index} className={`capitalize ${linkStyles}`}>
          {link.path === path && (
            <motion.span initial={{y: "100%"}} animate={{y: 0}} transition={{type: "tween"}} layoutId="underline" className={`${underlineStyles}`}/>
          )}
          {link.name}
        </Link>
      })}
    </nav>
  )
}

export default Nav