import About from "@/components/About"
import Cta from "@/components/Cta"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Reviews from "@/components/Reviews"

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