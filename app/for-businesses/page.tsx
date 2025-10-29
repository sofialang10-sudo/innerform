import Link from "next/link"
import {
  Clock,
  Target,
  Shield,
  Award,
  BarChart3,
  Users,
  CheckCircle2,
  Zap,
  Building2,
  Rocket
} from "lucide-react"
import Hero from "@/components/Hero"
import FeatureCard from "@/components/FeatureCard"
import PricingCard from "@/components/PricingCard"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Businesses - Innerform",
  description: "Hire verified creative talent with confidence. Access pre-vetted professionals, streamlined collaboration, and human-made certification for your projects.",
}

export default function ForBusinessesPage() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Save Time",
      description: "Pre-vetted talent means no more sifting through hundreds of applications. Get matched with qualified professionals.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Perfect Match",
      description: "Smart matching algorithm connects you with creatives who have the exact skills and values you need.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Payment Protection",
      description: "Escrow system and milestone-based payments give you control and protect both parties.",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Human-Made Verified",
      description: "Work with certified human creators. Get legal clarity and authentic creativity for your brand.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Quality Assurance",
      description: "Portfolio-based vetting, ratings, and reviews ensure you're working with top talent.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: "Project Management",
      description: "Built-in tools for contracts, milestones, communication, and file sharing in one place.",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small businesses testing the platform",
      features: [
        "3 monthly projects",
        "Basic matching algorithm",
        "Standard contract templates",
        "Payment processing",
        "Email support",
        "Project dashboard",
      ],
    },
    {
      name: "Growth",
      price: "$199",
      description: "Ideal for growing teams with regular hiring needs",
      features: [
        "10 monthly projects",
        "Priority matching",
        "Certified creatives access",
        "Advanced analytics",
        "Priority support",
        "Team collaboration features",
        "Custom contract templates",
        "Project management tools",
      ],
      isPopular: true,
    },
    {
      name: "Partner",
      price: "$299",
      description: "For agencies and enterprises with high-volume needs",
      features: [
        "Unlimited projects",
        "Concierge matching service",
        "Dedicated account manager",
        "Team workspace",
        "API access",
        "Custom integration support",
        "Certification tracking dashboard",
        "White-label options available",
      ],
    },
  ]

  const useCases = [
    {
      icon: <Rocket className="w-6 h-6 text-[var(--primary)]" />,
      title: "Startups",
      description: "Scale your creative team flexibly without full-time overhead",
      benefits: [
        "Access senior talent on-demand",
        "Flexible engagement models",
        "Build your brand with certified human creativity",
      ],
    },
    {
      icon: <Building2 className="w-6 h-6 text-[var(--primary)]" />,
      title: "Agencies",
      description: "Access specialized talent for client projects",
      benefits: [
        "Expand capabilities without hiring",
        "White-label collaboration",
        "Maintain quality standards",
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--primary)]" />,
      title: "SMBs",
      description: "Professional creative work without agency costs",
      benefits: [
        "Affordable access to quality talent",
        "Simple project management",
        "Build long-term relationships",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        title="Hire Verified Creative Talent. Build With Confidence."
        subtitle="Access pre-vetted creative professionals with the skills, values, and authenticity your projects deserve."
        primaryCta={{ label: "Get Started" }}
        secondaryCta={{ label: "View Pricing" }}
        image={
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 rounded-3xl flex items-center justify-center">
            <Target className="w-32 h-32 text-[var(--primary)]" />
          </div>
        }
      />

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Businesses Choose Innerform
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Stop wasting time on vetting. Start building with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Choose the plan that fits your hiring needs. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              All plans include payment processing, secure messaging, and contract management
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Need a custom solution?{" "}
              <Link href="/contact" className="text-[var(--primary)] hover:underline font-medium">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Built for Every Type of Business
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <p className="text-[var(--muted-foreground)]">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--foreground)]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Human-Made Certification for Businesses */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                <Award className="w-5 h-5 text-[var(--secondary)]" />
                <span className="text-sm font-semibold text-[var(--secondary)]">
                  Ethical Partnership Certificate
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
                Market Your Commitment to Human Creativity
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] mb-6">
                Showcase your business's commitment to ethical practices and authentic human creativity. Stand out in a market increasingly concerned about AI and authenticity.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Marketing Asset</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Use our certification badge on your website and materials
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Legal Clarity</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Clear documentation of human-made creative work
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Brand Differentiation</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Stand apart from competitors using AI-generated content
                    </p>
                  </div>
                </li>
              </ul>
              <Button size="lg">Learn More About Certification</Button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[var(--secondary)]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                  Certified Ethical Partner
                </h3>
                <Badge variant="secondary">Human-Made Committed</Badge>
              </div>
              <div className="space-y-3 text-center">
                <p className="text-sm text-[var(--muted-foreground)]">
                  This organization is committed to supporting human creativity and fair labor practices in the creative industry.
                </p>
                <p className="text-xs text-[var(--muted-foreground)] pt-4 border-t border-[var(--border)]">
                  Certified by Innerform • 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              The Real Cost of Traditional Hiring
            </h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              See how much time and money Innerform saves
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Traditional Freelance Hiring
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Reviewing applications</span>
                      <span className="font-semibold">8-12 hours</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Interviewing candidates</span>
                      <span className="font-semibold">4-6 hours</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Negotiating & contracts</span>
                      <span className="font-semibold">2-3 hours</span>
                    </li>
                    <li className="flex justify-between border-t border-[var(--border)] pt-3">
                      <span className="font-bold text-[var(--foreground)]">Total Time</span>
                      <span className="font-bold text-red-600">14-21 hours</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    With Innerform
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Receive matched profiles</span>
                      <span className="font-semibold">30 minutes</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Review & select</span>
                      <span className="font-semibold">1-2 hours</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Contract setup</span>
                      <span className="font-semibold">15 minutes</span>
                    </li>
                    <li className="flex justify-between border-t border-[var(--border)] pt-3">
                      <span className="font-bold text-[var(--foreground)]">Total Time</span>
                      <span className="font-bold text-green-600">~2 hours</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-green-50 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600 mb-2">
                  Save 85% of your hiring time
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  That's 12-19 hours saved per hire to focus on your business
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build With the Best Creative Talent?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking businesses who trust Innerform for quality,
            authenticity, and ethical partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
