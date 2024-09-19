import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <b className="text-2xl font-bold hover:text-primary transition duration-300 ease-in-out">
        Daniel Diaz
      </b>
    </Link>
  )
}

export default Logo
