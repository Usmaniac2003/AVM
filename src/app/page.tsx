import  SiteNavbar  from "@/app/components/site-navbar"
import  Hero  from "@/app/components/hero"
import  ServicesGrid  from "@/app/components/services-grid"
import { Showcase } from "@/app/components/showcase"
import { ProcessSteps } from "@/app/components/process-steps"
import { Testimonials } from "@/app/components/testimonials"
import { CTA } from "@/app/components/cta"

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <SiteNavbar />
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <ServicesGrid />
      </section>
      <section className="bg-card">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <Showcase />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <ProcessSteps />
      </section>
      <section className="bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <Testimonials />
        </div>
      </section>
      <CTA />
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2025 AVM E-Commerce • Dubai, UAE</p>
            <p>info@avmecommerce.com • www.avmecommerce.com</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
