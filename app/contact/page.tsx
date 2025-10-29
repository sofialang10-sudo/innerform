import Link from "next/link"
import { Mail, MessageSquare, Users, Newspaper, HelpCircle } from "lucide-react"
import Hero from "@/components/Hero"
import ContactForm from "@/components/ContactForm"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Innerform",
  description: "Get in touch with Innerform. We're here to help with questions, partnerships, and support.",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-[var(--primary)]" />,
      title: "General Inquiries",
      email: "hello@innerform.com",
      description: "Questions about our platform, pricing, or how to get started",
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--primary)]" />,
      title: "Partnerships",
      email: "partnerships@innerform.com",
      description: "Interested in partnering or integrating with Innerform",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[var(--primary)]" />,
      title: "Support",
      email: "support@innerform.com",
      description: "Technical support or help with your account",
    },
    {
      icon: <Newspaper className="w-6 h-6 text-[var(--primary)]" />,
      title: "Press & Media",
      email: "press@innerform.com",
      description: "Media inquiries, interview requests, and press kit",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        title="Get in Touch"
        subtitle="Have questions? We're here to help. Send us a message and we'll respond as soon as possible."
        image={
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 rounded-3xl flex items-center justify-center">
            <MessageSquare className="w-32 h-32 text-[var(--primary)]" />
          </div>
        }
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-[var(--muted-foreground)]">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Other Ways to Reach Us
                </h2>
                <p className="text-[var(--muted-foreground)]">
                  Prefer email? Choose the department that best fits your inquiry.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                            {method.title}
                          </h3>
                          <p className="text-sm text-[var(--muted-foreground)] mb-2">
                            {method.description}
                          </p>
                          <a
                            href={`mailto:${method.email}`}
                            className="text-sm text-[var(--primary)] hover:underline font-medium"
                          >
                            {method.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Link */}
              <Card className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-[var(--primary)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                        Looking for Quick Answers?
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] mb-4">
                        Check out our FAQ sections for immediate answers to common questions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Link href="/for-freelancers#faq">
                          <Button variant="outline" size="sm">
                            Freelancer FAQ
                          </Button>
                        </Link>
                        <Link href="/for-businesses">
                          <Button variant="outline" size="sm">
                            Business FAQ
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours / Response Time */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                    &lt; 24h
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Average response time for general inquiries
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                    Mon-Fri
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    9am - 6pm EST support hours
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                    100%
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    We respond to every message
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
