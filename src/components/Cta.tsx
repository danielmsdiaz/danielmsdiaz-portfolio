import Link from "next/link"
import { Button } from "@/components/ui/button"

const Cta = () => {
  return (
    <section className="py-24">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">Want to talk to me? Contact me!</h2>
                <Link href="/contact">
                    <Button>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta