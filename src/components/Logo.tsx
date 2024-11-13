import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center hover:scale-105 transition-all">
      <b className="text-2xl font-bold tracking-[-1px]"><span className="text-primary dark:text-darkMode">{"<"}</span>Daniel Diaz<span className="text-primary dark:text-darkMode">{"/>"}</span></b>
    </Link>
  )
}

export default Logo
