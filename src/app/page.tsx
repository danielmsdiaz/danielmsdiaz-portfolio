import { Metadata } from "next"
import About from "@/components/About"
import Cta from "@/components/Cta"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Reviews from "@/components/Reviews"

export const metadata: Metadata = {
  title: "Diaz Portifólio | Dev Full Stack",
  description: "Meu portifólio pessoal",
  icons: "/icon.png",
  openGraph: {
    type: "website",
    url: "https://danielmsdiaz-portfolio.vercel.app/",
    images: [{
      url: "/preview/preview.png",
      alt: "asd",
      width: 1300,
      height: 630
    }]
  }
}

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Cta />
    </main>
  )
}

export default Home