import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code,
  GitPullRequest,
  Zap,
  Shield,
  Star,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-blue-950">
      <header className="sticky top-0 z-50 w-full border-b border-blue-800/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-tight">
                KitKat
              </span>
              <span className="text-3xl font-bold text-white tracking-tight">Reviewer</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              FAQ
            </Link>
            <Button 
              variant="default" 
              className="bg-blue-600 hover:bg-blue-700 text-base font-medium px-6 py-2 h-11 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Code Reviews</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Review Code Faster <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                with KitKat
              </span>
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Automate your code reviews with AI. Get instant feedback, catch bugs,
              and improve code quality before merging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-2">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a
                  href="https://github.com/apps/prappgithub"
                  target="_blank"
                  className="gap-2 flex flex-row items-center"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
                Schedule Demo
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Card 1 - Context-Aware Review Summaries */}
            <Card className="bg-black/40 border-blue-800/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GitPullRequest className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Pull Request #1234</span>
                </div>
                <CardTitle className="text-xl text-white">Smart Review Summaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-white">KitKat Reviewer</div>
                    <div className="text-sm text-gray-400">
                      <p>AI-driven summary of your PR changes:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Updated `auth.ts` to handle OAuth token refresh</li>
                        <li>Added retry logic in `api_client.ts` for timeouts</li>
                        <li>Refactored `utils.ts` for better modularity</li>
                        <li>Suggestion: Add unit tests for new retry logic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Proactive Bug Prevention */}
            <Card className="bg-black/40 border-blue-800/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Bug Prevention</span>
                </div>
                <CardTitle className="text-xl text-white">Proactive Bug Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-white">AI Analysis</div>
                    <div className="text-sm text-gray-400">
                      <p>Prevent issues before they arise:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Detected unhandled edge case in `payment.ts`</li>
                        <li>Potential memory leak in `cache.ts`; suggest cleanup</li>
                        <li>Recommend input validation in `api.ts` to prevent XSS</li>
                        <li>Add error logging for async operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 - Customizable Feedback Styles */}
            <Card className="bg-black/40 border-blue-800/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Feedback Styles</span>
                </div>
                <CardTitle className="text-xl text-white">Customizable Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Star className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-white">Tailored Reviews</div>
                    <div className="text-sm text-gray-400">
                      <p>Personalize AI feedback to suit your team:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Concise summaries for quick reviews</li>
                        <li>Detailed feedback with code examples</li>
                        <li>Beginner-friendly tips for new developers</li>
                        <li>Custom tone to match team culture</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-24 space-y-16 mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Powerful Features for Better Code
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
              Our AI-powered review tool helps you ship better code faster with
              less back-and-forth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-blue-800/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Instant Feedback</CardTitle>
                <CardDescription className="text-gray-400">
                  Get detailed code reviews within seconds of opening a pull
                  request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  No more waiting for team members to review your code. Our AI
                  provides immediate, actionable feedback so you can iterate
                  quickly.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-blue-800/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Bug Detection</CardTitle>
                <CardDescription className="text-gray-400">
                  Catch bugs, security issues, and edge cases before they reach
                  production.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  Our AI is trained on millions of code repositories and can
                  identify potential issues that humans might miss.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-blue-800/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Code Quality</CardTitle>
                <CardDescription className="text-gray-400">
                  Improve code quality with suggestions for better patterns and
                  practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  Get recommendations for cleaner, more maintainable code that
                  follows best practices for your language and framework.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-black/40 py-24">
          <div className="container space-y-16 mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                How It Works
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
                Integrate with your existing workflow in minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Connect Your Repository</h3>
                <p className="text-gray-400">
                  Install our GitHub app or integrate with GitLab, Bitbucket, or
                  Azure DevOps.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Configure Settings</h3>
                <p className="text-gray-400">
                  Set your preferences for review depth, focus areas, and
                  notification settings.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Get Automated Reviews</h3>
                <p className="text-gray-400">
                  Our AI automatically reviews every pull request and provides
                  detailed feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-24 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
              Everything you need to know about KitKat Reviewer.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-black/40 border-blue-800/20 rounded-lg px-4">
                <AccordionTrigger className="text-lg text-white hover:text-blue-400 py-4">
                  How accurate is the AI code review?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  Our AI has been trained on millions of code repositories and
                  achieves over 90% accuracy in identifying bugs and suggesting
                  improvements. However, we recommend using it as a complement
                  to human reviews, not a replacement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-black/40 border-blue-800/20 rounded-lg px-4">
                <AccordionTrigger className="text-lg text-white hover:text-blue-400 py-4">
                  Which programming languages are supported?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  We currently support JavaScript, TypeScript, Python, Java, C#,
                  Ruby, Go, PHP, and Rust. We are constantly adding support for
                  more languages based on user feedback.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-black/40 border-blue-800/20 rounded-lg px-4">
                <AccordionTrigger className="text-lg text-white hover:text-blue-400 py-4">
                  Is my code secure with KitKat Reviewer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  Absolutely. We take security seriously. Your code is encrypted
                  in transit and at rest. We do not store your code after the
                  review is complete, and we never use your proprietary code to
                  train our models.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-black/40 border-blue-800/20 rounded-lg px-4">
                <AccordionTrigger className="text-lg text-white hover:text-blue-400 py-4">
                  Can I customize the review rules?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  Yes, Pro and Enterprise plans allow you to customize review
                  rules to match your team's coding standards and focus on
                  specific areas that matter most to your projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Built by Section */}
        <div className="container py-8 flex justify-end items-center border-t border-blue-800/20">
          <a 
            href="https://github.com/karthiknadar1204" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-base font-medium bg-black/40 px-6 py-3 rounded-full hover:bg-black/60"
          >
            <span>Built with ❤️ by</span>
            <span className="font-semibold">Karthik</span>
          </a>
        </div>
      </main>
    </div>
  );
}