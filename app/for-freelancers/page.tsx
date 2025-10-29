import Link from "next/link"
import {
  DollarSign,
  Shield,
  Award,
  Users,
  Heart,
  FileCheck,
  CheckCircle2,
  Clock,
  ChevronDown,
  TrendingUp
} from "lucide-react"
import Hero from "@/components/Hero"
import FeatureCard from "@/components/FeatureCard"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Freelancers - Innerform",
  description: "Get paid fairly, work with purpose. Join a curated marketplace that protects creative professionals with low fees, payment protection, and human-made certification.",
}

export default function ForFreelancersPage() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Low Commission (5-8%)",
      description: "Keep more of what you earn. Our fair commission structure means you take home 90-95% of your earnings.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Payment Protection",
      description: "Escrow system ensures you get paid for approved work. No more chasing clients for payment.",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Human-Made Certification",
      description: "Stand out with verified human-created work certification. A valuable differentiator in the AI age.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Quality Clients",
      description: "Work with vetted, values-aligned businesses that respect creative professionals.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "No Wage Theft",
      description: "Clear contracts, milestone tracking, and dispute resolution that protects your work.",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Values Alignment",
      description: "Connect with businesses that share your values and appreciate authentic human creativity.",
    },
  ]

  const certificationSteps = [
    {
      title: "Create & Document",
      description: "Work on your projects while maintaining records of your creative process.",
    },
    {
      title: "Get Certified",
      description: "Submit your work for human-made verification through our simple process.",
    },
    {
      title: "Market Your Work",
      description: "Use your certification badge on portfolios, proposals, and client communications.",
    },
    {
      title: "Stand Apart",
      description: "Offer legal clarity and peace of mind to clients concerned about AI usage.",
    },
  ]

  const applicationProcess = [
    { step: "Submit Portfolio", time: "5 minutes" },
    { step: "Portfolio Review", time: "2-3 days" },
    { step: "Setup Profile", time: "10 minutes" },
    { step: "Start Receiving Projects", time: "Immediate" },
  ]

  const faqs = [
    {
      question: "How much does it cost to join?",
      answer: "Joining Innerform is free. We only charge a 5-8% commission on completed projects, which is significantly lower than industry standards of 10-20%.",
    },
    {
      question: "How does payment protection work?",
      answer: "All project payments go into escrow when a contract starts. Once you deliver approved work, funds are released to you within 2-3 business days. This ensures you always get paid for approved work.",
    },
    {
      question: "What is Human-Made Certification?",
      answer: "It's a verification that your work is human-originated, not AI-generated. This provides legal protection and serves as a marketing differentiator, especially valuable as clients navigate AI concerns.",
    },
    {
      question: "How selective is the application process?",
      answer: "We maintain quality by accepting experienced professionals with strong portfolios. We look for demonstrated skill, professional presentation, and alignment with our values.",
    },
    {
      question: "Can I work on other platforms?",
      answer: "Yes! We don't require exclusivity. Many of our creatives use Innerform alongside other income streams.",
    },
    {
      question: "How do I get matched with projects?",
      answer: "Our algorithm matches your skills, experience, and preferences with business needs. You'll also be able to browse projects and submit proposals.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        title="Get Paid Fairly. Work With Purpose."
        subtitle="Join a curated marketplace that protects creative professionals with fair fees, payment protection, and human-made certification."
        primaryCta={{ label: "Apply Now" }}
        secondaryCta={{ label: "See How It Works" }}
        image={
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 rounded-3xl flex items-center justify-center">
            <Award className="w-32 h-32 text-[var(--primary)]" />
          </div>
        }
      />

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Creative Professionals Choose Innerform
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              A platform built for creatives, by people who understand the challenges
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

      {/* Commission Comparison */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Keep More of What You Earn
            </h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              Compare our fair commission with industry leaders
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Innerform */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-500">
                  <div>
                    <p className="font-semibold text-lg text-[var(--foreground)]">Innerform</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Fair commission</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">5-8%</p>
                    <Badge variant="accent">You keep 92-95%</Badge>
                  </div>
                </div>

                {/* Competitors */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Upwork</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Sliding scale</p>
                  </div>
                  <p className="text-2xl font-bold text-[var(--muted)]">5-20%</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Fiverr</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Standard commission</p>
                  </div>
                  <p className="text-2xl font-bold text-[var(--muted)]">20%</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Toptal</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Premium platform</p>
                  </div>
                  <p className="text-2xl font-bold text-[var(--muted)]">~15%</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-[var(--foreground)] font-medium text-center">
                  On a $10,000 project, you keep <span className="font-bold text-[var(--primary)]">$9,200-9,500</span> vs $8,000-9,500 on other platforms
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Human-Made Certification */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Award className="w-5 h-5 text-[var(--secondary)]" />
              <span className="text-sm font-semibold text-[var(--secondary)]">
                Human-Made Certified
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Stand Out With Verified Human Creativity
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              In the age of AI, prove your work is authentically human-created
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certificationSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-[var(--secondary)]">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)]">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--primary)]" />
                  Legal Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Protect yourself from AI-related contract disputes and liability concerns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
                  Marketing Edge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Differentiate yourself in a crowded market with verified human creativity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[var(--primary)]" />
                  Client Trust
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Give clients peace of mind about the authenticity of your work
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Simple Application Process
            </h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              From application to your first project in days, not weeks
            </p>
          </div>

          <div className="space-y-4">
            {applicationProcess.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {item.step}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.time}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="xl">Apply to Join Innerform</Button>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              No application fee. Free to join.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)]" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--muted-foreground)]">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[var(--muted-foreground)] mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Creative Career?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of creative professionals who are building sustainable,
            fulfilling careers on Innerform.
          </p>
          <Button size="xl" variant="secondary">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  )
}
