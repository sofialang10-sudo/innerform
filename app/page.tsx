import Link from "next/link"
import {
  UserCheck,
  Network,
  Award,
  Palette,
  Users,
  TrendingUp,
  ArrowRight
} from "lucide-react"
import Hero from "@/components/Hero"
import FeatureCard from "@/components/FeatureCard"
import TestimonialCard from "@/components/TestimonialCard"
import StatsCounter from "@/components/StatsCounter"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Where Human Creativity Meets Ethical Opportunity"
        subtitle="A curated platform connecting verified creative professionals with values-aligned businesses"
        primaryCta={{ label: "I'm a Creative" }}
        secondaryCta={{ label: "I'm Hiring" }}
        image={
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 rounded-3xl flex items-center justify-center">
            <Palette className="w-32 h-32 text-[var(--primary)]" />
          </div>
        }
      />

      {/* Value Propositions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Choose Innerform?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              We're building a better way to connect talent with opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<UserCheck className="w-6 h-6 text-white" />}
              title="Pre-Vetted Excellence"
              description="Only top creative professionals. Portfolio-based vetting ensures quality every time."
            />
            <FeatureCard
              icon={<Network className="w-6 h-6 text-white" />}
              title="Perfect Partnerships"
              description="Intelligent matching based on skills, values, and project needs for ideal collaborations."
            />
            <FeatureCard
              icon={<Award className="w-6 h-6 text-white" />}
              title="Verified Authenticity"
              description="Certified human-originated creative work. Stand apart from AI-generated content."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Creatives */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
                <Palette className="w-6 h-6 text-[var(--primary)]" />
                For Creatives
              </h3>
              <div className="space-y-4">
                {[
                  "Apply with your portfolio",
                  "Get verified in 2-5 days",
                  "Receive matched projects",
                  "Create & get paid fairly"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-[var(--foreground)] pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <Link href="/for-freelancers">
                <Button className="w-full mt-8" size="lg">
                  Learn More for Creatives
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            {/* For Businesses */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[var(--secondary)]" />
                For Businesses
              </h3>
              <div className="space-y-4">
                {[
                  "Post your project",
                  "Get matched with talent",
                  "Collaborate seamlessly",
                  "Pay with confidence"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-[var(--foreground)] pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <Link href="/for-businesses">
                <Button className="w-full mt-8" size="lg" variant="secondary">
                  Learn More for Businesses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Freelance Problem
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Traditional platforms aren't working for creatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">62%</div>
              <p className="text-sm sm:text-base text-indigo-100">
                of freelancers face payment delays
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">10-20%</div>
              <p className="text-sm sm:text-base text-indigo-100">
                industry standard commission
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">5-8%</div>
              <p className="text-sm sm:text-base text-indigo-100">
                Innerform's fair commission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Trusted by Creative Professionals
            </h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              See what our community has to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Finally, a platform that values my work and protects my income. The human-made certification has become a key differentiator for my clients."
              author="Sarah Chen"
              role="Graphic Designer"
            />
            <TestimonialCard
              quote="The vetting process meant I could trust the quality of talent. Found our perfect design partner in days, not weeks."
              author="Marcus Williams"
              role="Startup Founder"
            />
            <TestimonialCard
              quote="Lower fees, better clients, and payment protection. Innerform gets what freelancers actually need."
              author="Priya Patel"
              role="Copywriter"
            />
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[var(--muted-foreground)]" />
              <p className="text-[var(--muted-foreground)]">
                Join 500+ creative professionals building their future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
            Ready to Join the Future of Creative Collaboration?
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
            Whether you're a creative professional or a business looking for talent,
            we're here to build something better together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-freelancers">
              <Button size="xl" className="text-base">
                Start Creating Ethically
              </Button>
            </Link>
            <Link href="/for-businesses">
              <Button size="xl" variant="outline" className="text-base">
                Hire Verified Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
