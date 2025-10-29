import { Heart, Target, Shield, Users, TrendingUp, Lightbulb } from "lucide-react"
import Hero from "@/components/Hero"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import StatsCounter from "@/components/StatsCounter"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Innerform",
  description: "Learn about Innerform's mission to build an ethical creative economy that values human creativity and fair labor practices.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Fairness",
      description: "Fair compensation, transparent practices, and equitable treatment for all creative professionals.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Quality",
      description: "Commitment to excellence through careful vetting and ongoing quality standards.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Human Creativity",
      description: "Celebrating and protecting authentic human-originated creative work in the AI age.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Transparency",
      description: "Clear communication, honest pricing, and open processes build lasting trust.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community",
      description: "Building a supportive ecosystem where creatives and businesses thrive together.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        title="Building an Ethical Creative Economy"
        subtitle="We believe creative professionals deserve fair pay, respect, and protection. We're building the platform to make that possible."
        image={
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 rounded-3xl flex items-center justify-center">
            <Heart className="w-32 h-32 text-[var(--primary)]" />
          </div>
        }
      />

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-[var(--foreground)] leading-relaxed mb-6">
              To create a curated marketplace where creative professionals are valued,
              protected, and fairly compensated, while connecting them with businesses
              that share their values.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              We're addressing two critical challenges: the exploitation of freelancers
              on traditional platforms, and the displacement of human creativity by AI.
              Our solution puts people first.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              The Problems We're Solving
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Freelancer Exploitation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>62% of freelancers experience payment delays or non-payment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>Traditional platforms charge 10-20% commissions on already-tight margins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>Race-to-the-bottom pricing devalues professional creative work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>Limited protections leave freelancers vulnerable to exploitation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">AI Displacement Concerns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>Clients increasingly uncertain about work authenticity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>Legal grey areas around AI-generated content liability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>Devaluation of human creativity and skill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>No way for ethical creators to differentiate themselves</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-[var(--primary)]">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-center">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[var(--foreground)] text-center leading-relaxed">
                A curated marketplace that combines <strong>fair fees (5-8%)</strong>,{" "}
                <strong>payment protection</strong>, <strong>quality vetting</strong>, and{" "}
                <strong>human-made certification</strong> to create an ecosystem where both
                creatives and businesses thrive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              These principles guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Why We Started Innerform
            </h2>
          </div>

          <Card className="p-8">
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--foreground)] leading-relaxed mb-6">
                  Innerform was born from firsthand experience with the challenges facing
                  creative professionals in the modern gig economy. After years of watching
                  talented designers, writers, and creators struggle with payment delays,
                  unfair fees, and devaluation of their work, we knew something had to change.
                </p>
                <p className="text-[var(--foreground)] leading-relaxed mb-6">
                  The rise of AI added a new dimension to this challenge. While AI tools can
                  be valuable, they've also created confusion about work authenticity and
                  contributed to the devaluation of human creativity. We saw an opportunity
                  to build something different: a platform that celebrates and certifies
                  human-originated work while protecting the people who create it.
                </p>
                <p className="text-[var(--foreground)] leading-relaxed">
                  Innerform isn't just a marketplace—it's a movement toward a more ethical,
                  sustainable creative economy. We're building the future we want to see:
                  where talent is valued, fairness is standard, and human creativity thrives.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-indigo-100">
              Building a better future for creative professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">500+</div>
              <p className="text-sm sm:text-base text-indigo-100">
                Creative Professionals Protected
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">$2M+</div>
              <p className="text-sm sm:text-base text-indigo-100">
                Fair Wages Paid
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">1,200+</div>
              <p className="text-sm sm:text-base text-indigo-100">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
            <span className="text-sm font-semibold text-[var(--primary)]">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            A Future Where Creativity is Valued
          </h2>
          <p className="text-xl text-[var(--foreground)] leading-relaxed mb-6">
            We envision a world where creative professionals can build sustainable careers
            doing work they love, while businesses access authentic human creativity with
            confidence and clarity.
          </p>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Where platforms protect both parties, fees are fair, and human creativity is
            celebrated. Where ethical practices aren't an exception—they're the standard.
            That's the future we're building at Innerform.
          </p>
        </div>
      </section>
    </div>
  )
}
