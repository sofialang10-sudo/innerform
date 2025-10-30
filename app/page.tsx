import Link from "next/link"
import {
  UserCheck,
  Network,
  Award,
  Sparkles,
  Users,
  TrendingUp,
  Search,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import Hero from "@/components/Hero"
import TestimonialCard from "@/components/TestimonialCard"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Gradient */}
      <Hero
        variant="gradient"
        tagline="Where Creativity Meets Ethics"
        title="Human Creativity, Verified & Protected"
        subtitle="A curated platform connecting verified creative professionals with values-aligned businesses"
        primaryCta={{ label: "I'm a Creative" }}
        secondaryCta={{ label: "I'm Hiring" }}
      />

      {/* Bento Box Features */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

            {/* Card 1 - Takes 2 columns, dark background */}
            <div className="lg:col-span-2 bg-[var(--navy)] rounded-3xl p-12 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-[var(--accent-teal)] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Pre-Vetted Excellence</h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Only top creative professionals. Portfolio-based vetting ensures quality you can trust.
              </p>
            </div>

            {/* Card 2 - Light background */}
            <div className="bg-gray-50 rounded-3xl p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-[var(--gradient-purple)] rounded-2xl flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Perfect Partnerships</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Intelligent matching based on skills, values, and project needs.
              </p>
            </div>

            {/* Card 3 - Gradient background */}
            <div className="lg:col-span-3 bg-gradient-cta rounded-3xl p-12 md:p-16 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center justify-between flex-wrap gap-8">
                <div className="flex-1 min-w-[300px]">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Verified Authenticity</h3>
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                    Certified human-originated creative work. Stand apart from AI with legal protection and trust.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {/* Certification badge visual */}
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border-4 border-white/20">
                    <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Search / Browse Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight" style={{ fontWeight: 800 }}>
              A new way to work
            </h2>
            <p className="text-xl md:text-2xl text-[var(--muted-foreground)]">
              Discover, connect, and work with verified creative talent
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex justify-center gap-8 mb-12">
            <button className="text-lg font-bold text-black border-b-4 border-black pb-3 px-4">
              HIRE
            </button>
            <button className="text-lg font-bold text-gray-400 pb-3 px-4 hover:text-gray-600 transition-colors">
              GET HIRED
            </button>
          </div>

          {/* Large search bar */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="What do you need help with?"
                className="w-full h-20 pl-16 pr-56 rounded-full border-2 border-gray-200 text-lg focus:outline-none focus:border-gray-400 transition-colors shadow-lg"
              />
              <button className="absolute right-2 top-2 bottom-2 px-10 bg-black text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg">
                Browse Creatives
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-3 justify-center flex-wrap mb-16">
            {['Featured', 'Graphic Designers', 'Copywriters', 'Brand Strategists', 'Photographers', 'Video Editors'].map(cat => (
              <button key={cat} className="px-8 py-3 bg-white rounded-full text-sm font-semibold hover:bg-gray-100 hover:shadow-md transition-all">
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* How It Works - Bold Title */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Bold title with italic emphasis */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 leading-tight" style={{ fontWeight: 800 }}>
              Designed to Help You
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight" style={{ fontWeight: 800 }}>
              Do More <span className="italic font-serif text-[var(--gradient-purple)]">With Less Stress</span>
            </h2>
          </div>

          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* For Creatives column */}
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                For Creatives
              </h3>
              <div className="space-y-6">
                {[
                  "Apply with your portfolio",
                  "Get verified in 2-5 days",
                  "Receive matched projects",
                  "Create & get paid fairly"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold flex-shrink-0 text-lg">
                      {index + 1}
                    </div>
                    <p className="text-lg text-[var(--foreground)] pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <Link href="/for-freelancers">
                <Button className="mt-10" size="lg">
                  Learn More for Creatives
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* For Businesses column */}
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--secondary)] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                For Businesses
              </h3>
              <div className="space-y-6">
                {[
                  "Post your project",
                  "Get matched with talent",
                  "Collaborate seamlessly",
                  "Pay with confidence"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center font-bold flex-shrink-0 text-lg">
                      {index + 1}
                    </div>
                    <p className="text-lg text-[var(--foreground)] pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <Link href="/for-businesses">
                <Button className="mt-10" size="lg" variant="secondary">
                  Learn More for Businesses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 px-6 bg-gradient-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontWeight: 800 }}>
              The Freelance Problem
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Traditional platforms aren't working for creatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-extrabold text-[var(--accent-teal)]" style={{ fontWeight: 800 }}>62%</div>
              <p className="text-lg md:text-xl text-white/80">
                of freelancers face payment delays
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-extrabold text-[var(--accent-teal)]" style={{ fontWeight: 800 }}>10-20%</div>
              <p className="text-lg md:text-xl text-white/80">
                industry standard commission
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-extrabold text-[var(--accent-teal)]" style={{ fontWeight: 800 }}>5-8%</div>
              <p className="text-lg md:text-xl text-white/80">
                Innerform's fair commission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] mb-6 leading-tight" style={{ fontWeight: 800 }}>
              Trusted by Creative Professionals
            </h2>
            <p className="text-xl md:text-2xl text-[var(--muted-foreground)]">
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
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[var(--muted-foreground)]" />
              <p className="text-lg text-[var(--muted-foreground)]">
                Join 500+ creative professionals building their future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Large Gradient Card */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="relative bg-gradient-cta rounded-3xl p-16 md:p-24 lg:p-32 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight" style={{ fontWeight: 800 }}>
                Ready to join the future of creative collaboration?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed">
                Whether you're a creative looking for fair work or a business seeking quality talent
              </p>

              <div className="flex gap-6 justify-center flex-wrap">
                <Button variant="white" size="xl">
                  Apply as Creative
                </Button>
                <Button variant="default" size="xl">
                  Start Hiring
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
