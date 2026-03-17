import { About } from "@/components/About"
import { Environment } from "@/components/Environment"
import { DIfferentials } from "@/components/Differentials"
import { DiscordCTA } from "@/components/DiscordCTA"
import { Ecosystem } from "@/components/Ecosystem"
import { ESRBRating } from "@/components/ESRBRating"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { Gallery } from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Partners } from "@/components/Partners"
import { Team } from "@/components/Team"
import { Trailer } from "@/components/Trailer"

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Partners />
        <Trailer />
        <Environment />
        <Ecosystem />
        <Gallery />
        <DIfferentials />
        <Team />
        <FAQ />
        <DiscordCTA />
      </main>
      <ESRBRating />
      <Footer />
    </>
  )
}

export default App
