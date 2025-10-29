import {
  FileText,
  UserCheck,
  Settings,
  Target,
  Send,
  MessageSquare,
  CheckCircle,
  DollarSign,
  Shield,
  Award,
  Clock,
  Users
} from "lucide-react"
import Hero from "@/components/Hero"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works - Innerform",
  description: "Learn how Innerform connects creative professionals with ethical businesses through our curated marketplace platform.",
}

export default function HowItWorksPage() {
  const freelancerJourney = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Apply with Portfolio",
      description: "Submit your portfolio and professional information. Takes about 5 minutes.",
      details: ["Upload work samples", "List your skills & experience", "Share your creative process"],
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Vetting Review",
      description: "Our team reviews your work quality, professionalism, and values alignment.",
      details: ["Portfolio quality assessment", "Skill verification", "Professional background check"],
      timeline: "2-5 days",
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Profile Setup",
      description: "Complete your profile with rates, availability, and preferences.",
      details: ["Set your hourly/project rates", "Define availability", "Choose project preferences"],
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Get Matched or Browse",
      description: "Receive matched project opportunities or browse open projects.",
      details: ["Smart matching based on skills", "Browse projects actively", "Filter by your preferences"],
    },
    {
      icon: <Send className="w-6 h-6 text-white" />,
      title: "Submit Proposals",
      description: "Send proposals to interested businesses with your approach and timeline.",
      details: ["Craft custom proposals", "Set project scope", "Define deliverables & timeline"],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Work & Collaborate",
      description: "Use built-in tools to communicate, share files, and track milestones.",
      details: ["Secure messaging", "File sharing", "Milestone tracking"],
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Get Paid",
      description: "Receive payment via escrow once work is approved. Fast, secure, protected.",
      details: ["Milestone-based payments", "Secure escrow", "2-3 day processing"],
    },
  ]

  const businessJourney = [
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Create Account",
      description: "Sign up with your business information. Quick and simple.",
      details: ["Business verification", "Team setup (optional)", "Profile completion"],
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Choose Subscription",
      description: "Select a plan that fits your hiring needs.",
      details: ["Starter: $99/mo", "Growth: $199/mo", "Partner: $299/mo"],
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Post Project Details",
      description: "Describe your project, requirements, budget, and timeline.",
      details: ["Define project scope", "Set budget & timeline", "Specify required skills"],
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Receive Matched Creatives",
      description: "Get a curated list of qualified professionals matched to your needs.",
      details: ["Smart matching algorithm", "Pre-vetted talent only", "Skills & values alignment"],
      timeline: "Within 24 hours",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Review & Select",
      description: "Review profiles, portfolios, and proposals. Interview candidates.",
      details: ["Review work samples", "Check ratings & reviews", "Interview top candidates"],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Collaborate in Workspace",
      description: "Use integrated project management tools for seamless collaboration.",
      details: ["Contract management", "Milestone tracking", "Secure communication"],
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Approve & Release Payment",
      description: "Review deliverables, approve milestones, and release escrow payments.",
      details: ["Review work", "Approve milestones", "Automatic payment release"],
    },
  ]

  const platformFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-[var(--primary)]" />,
      title: "Escrow System",
      description: "Payments are held in escrow until work is approved. Protects both parties and ensures fair transactions.",
    },
    {
      icon: <FileText className="w-6 h-6 text-[var(--primary)]" />,
      title: "Contract Templates",
      description: "Professional, legally-sound contract templates for every project type. Customize as needed.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[var(--primary)]" />,
      title: "Secure Messaging",
      description: "End-to-end encrypted communication system keeps all project discussions in one place.",
    },
    {
      icon: <Award className="w-6 h-6 text-[var(--primary)]" />,
      title: "Review System",
      description: "Transparent ratings and reviews help build trust and maintain quality standards.",
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--primary)]" />,
      title: "Human-Made Certification",
      description: "Verify and badge human-originated creative work for legal protection and marketing value.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[var(--primary)]" />,
      title: "Milestone Tracking",
      description: "Break projects into manageable milestones with clear deliverables and payment schedules.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        title="How Innerform Works"
        subtitle="A transparent, straightforward process that protects both creative professionals and businesses"
        image={
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 rounded-3xl flex items-center justify-center">
            <Target className="w-32 h-32 text-[var(--primary)]" />
          </div>
        }
      />

      {/* Journey Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Freelancer Journey */}
            <div>
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                      For Creatives
                    </h2>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Your journey from application to paid project
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                {freelancerJourney.map((step, index) => (
                  <Card key={index} className="relative hover:shadow-lg transition-shadow">
                    {index < freelancerJourney.length - 1 && (
                      <div className="absolute left-10 top-16 bottom-0 w-0.5 bg-[var(--border)] -mb-6" />
                    )}
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center relative z-10">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-[var(--foreground)]">
                              {index + 1}. {step.title}
                            </h3>
                            {step.timeline && (
                              <Badge variant="outline" className="text-xs">
                                {step.timeline}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-[var(--muted-foreground)] mb-3">
                            {step.description}
                          </p>
                          <ul className="space-y-1">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="text-xs text-[var(--muted-foreground)] flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Journey */}
            <div>
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                      For Businesses
                    </h2>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Your journey from signup to successful project
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                {businessJourney.map((step, index) => (
                  <Card key={index} className="relative hover:shadow-lg transition-shadow">
                    {index < businessJourney.length - 1 && (
                      <div className="absolute left-10 top-16 bottom-0 w-0.5 bg-[var(--border)] -mb-6" />
                    )}
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center relative z-10">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-[var(--foreground)]">
                              {index + 1}. {step.title}
                            </h3>
                            {step.timeline && (
                              <Badge variant="outline" className="text-xs">
                                {step.timeline}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-[var(--muted-foreground)] mb-3">
                            {step.description}
                          </p>
                          <ul className="space-y-1">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="text-xs text-[var(--muted-foreground)] flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-[var(--secondary)]" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Platform Features That Protect Everyone
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Built-in tools and systems designed for trust, transparency, and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Built on Trust & Transparency
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    For Creatives
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">We protect your work and income</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Payments held in escrow until work approved</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Clear contracts define scope and deliverables</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Dispute resolution process protects your rights</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Direct deposit to your bank account</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    For Businesses
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">We ensure quality and reliability</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>All creatives vetted for quality and professionalism</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Milestone-based payments give you control</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Review system maintains accountability</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Money-back guarantee for failed deliverables</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
