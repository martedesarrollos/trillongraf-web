import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
