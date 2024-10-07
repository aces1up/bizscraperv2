'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"
import Link from "next/link"
import Script from 'next/script'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function LandingPage() {
  const [nicheKeywords, setNicheKeywords] = React.useState("")
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const pricingRef = React.useRef<HTMLDivElement>(null)
  const sampleRef = React.useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const payload = {
      search: nicheKeywords,
      full_name: fullName,
      email: email
    }

    try {
      const response = await fetch('https://app.prospectingbandit.com/phoneagent_api/db_create_scrape_sample?api_password=KrevSolutionsisCool9939', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setNicheKeywords("")
      setFullName("")
      setEmail("")
      setIsModalOpen(true)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Script src="//tinder.thrivecart.com/embed/v1/thrivecart.js" strategy="lazyOnload" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-black bg-opacity-80 backdrop-blur-sm z-10">
        <Link className="flex items-center justify-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-blue-400"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9v6" />
          </svg>
          <span className="ml-2 text-xl font-bold text-blue-400">BizScraper</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="link" className="text-sm font-medium text-white hover:text-blue-400" onClick={() => scrollToSection(pricingRef)}>
            Pricing
          </Button>
          <Button variant="link" className="text-sm font-medium text-white hover:text-blue-400" onClick={() => scrollToSection(sampleRef)}>
            Try Sample
          </Button>
        </nav>
      </header>
      <main className="flex-1 relative">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-400">
                  Dominate Your Local Market in 7 Days
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Get 10x more leads than your competitors with our AI-powered Google Business scraper and Facebook LAA generator - or we buy you a Sandwich!
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3" onClick={() => scrollToSection(pricingRef)}>Get Started</Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black text-lg px-8 py-3" onClick={() => scrollToSection(sampleRef)}>Try Sample</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" ref={pricingRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-400">Your Path, Your Price</h2>
            <p className="text-xl text-center mb-12 text-gray-400">Choose How You Break the Boundaries</p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 max-w-6xl mx-auto">
              <Card className="bg-gray-800 border-blue-400">
                <CardHeader>
                  <CardTitle className="text-blue-400">Adrenaline Surge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">$9.99/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      500 credits (equal to 10,000 contacts)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      Facebook LAA CSV generation
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg">
                    <p className="text-blue-300 text-sm leading-relaxed">
                      For those who want fast, high-powered data extraction, this plan taps into speed and precision, giving you just enough for a quick rush of information without overdoing it.
                    </p>
                  </div>
                  <div className="mt-6 w-full">
                    <a
                      data-thrivecart-account="prospectingbandit"
                      data-thrivecart-tpl="v2"
                      data-thrivecart-product="52"
                      className="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom w-full text-center py-2 px-4 rounded"
                      style={{ backgroundColor: '#E7865F', color: 'white', display: 'inline-block', textDecoration: 'none' }}
                    >
                      Choose Plan
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-blue-400">
                <CardHeader>
                  <CardTitle className="text-blue-400">Mayhem Protocol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">$49/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      2,500 credits (equal to 50,000 contacts)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      Facebook LAA CSV generation
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg">
                    <p className="text-blue-300 text-sm leading-relaxed">
                      Unleash controlled chaos with a plan that's built for those who want to dive deeper into data, scraping layers that others might fear to touch. You're not here to play by the rules—you're here to disrupt.
                    </p>
                  </div>
                  <div className="mt-6 w-full">
                    <a
                      data-thrivecart-account="prospectingbandit"
                      data-thrivecart-tpl="v2"
                      data-thrivecart-product="53"
                      className="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom w-full text-center py-2 px-4 rounded"
                      style={{ backgroundColor: '#E7865F', color: 'white', display: 'inline-block', textDecoration: 'none' }}
                    >
                      Choose Plan
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-blue-400">
                <CardHeader>
                  <CardTitle className="text-blue-400">Limitless Breaker</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">$99/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-300">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      5,000 credits (equal to 100,000 contacts)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      Facebook LAA CSV generation
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg">
                    <p className="text-blue-300 text-sm leading-relaxed">
                      For the elite few who push boundaries and demand total freedom in their scraping endeavors. This plan offers unrestricted access, giving you the power to break through any data limit and surf the biggest waves of information.
                    </p>
                  </div>
                  <div className="mt-6 w-full">
                    <a
                      data-thrivecart-account="prospectingbandit"
                      data-thrivecart-tpl="v2"
                      data-thrivecart-product="54"
                      className="thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom w-full text-center py-2 px-4 rounded"
                      style={{ backgroundColor: '#E7865F', color: 'white', display: 'inline-block', textDecoration: 'none' }}
                    >
                      Choose Plan
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="sample" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" ref={sampleRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-400">Try BizScraper For Free</h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Experience the power of our Google Business Listings scraper and Facebook LAA generator with a free sample. No credit card required.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nicheKeywords" className="text-left block text-gray-300">Niche Keywords</Label>
                  <Input
                    id="nicheKeywords"
                    placeholder="e.g., Solar Installer, Dentist, Personal Trainer"
                    value={nicheKeywords}
                    onChange={(e) => setNicheKeywords(e.target.value)}
                    required
                    className="bg-gray-600 text-white border-gray-500 focus:border-blue-400 placeholder-gray-400"
                  />
                  <p className="text-sm text-gray-400 text-left">
                    Enter your niche keywords separated by a comma, do not include city we will search top 500 USA cities for you automatically.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-left block text-gray-300">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="bg-gray-600 text-white border-gray-500 focus:border-blue-400 placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-left block text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-600 text-white border-gray-500 focus:border-blue-400 placeholder-gray-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Get Your Free Sample'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 BizScraper Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-red-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-red-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-red-600 border-2">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-500">The First Rule of BizScraper</DialogTitle>
            <DialogDescription className="text-lg text-gray-300">
              You do talk about it. You talk about it A LOT.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-lg">
              With BizScraper, you're about to become the Tyler Durden of your industry. We've received your submission, and your sample report will hit your inbox within the hour. Get ready to disrupt the system.
            </p>
            <p className="text-lg text-yellow-400">
              Don't forget to check your spam folder if you don't see the report in your inbox!
            </p>
            <Button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg"
            >
              I Understand
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}