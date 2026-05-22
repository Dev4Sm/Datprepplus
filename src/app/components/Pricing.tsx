import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, Shield, Download, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

export function Pricing() {
  const benefits = [
    "Complete DAT study guide (PDF format)",
    "Lifetime access - yours forever",
    "No recurring fees or subscriptions",
    "Advanced biology & microbiology insights",
    "Proven test-taking strategies",
    "Practice questions & answer keys",
    "Study schedules & planning tools",
    "Instant download after purchase"
  ];

  return (
    <section className="py-24 bg-gray-900/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
            <Sparkles className="h-3 w-3 mr-1" />
            Special Offer
          </Badge>
          <h2 className="mb-4 text-4xl tracking-tight text-white">
            Invest in Your Future
          </h2>
          <p className="text-lg text-white/80">
            One payment. Lifetime access. No surprises.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="overflow-hidden shadow-2xl border-white/10 bg-white/5">
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-8 text-center">
              <h3 className="mb-2 text-2xl text-white">Complete DAT Mastery Guide</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl tracking-tight text-white">$147</span>
                <span className="text-white/70">one-time</span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-white/70">
                <Shield className="h-4 w-4" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full text-base bg-blue-600 hover:bg-blue-700 border-yellow-500/80 text-white">
                <Download className="mr-2 h-5 w-5" />
                Get Instant Access Now
              </Button>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-center text-white/70">
                  <strong className="text-white">Compare:</strong> Other DAT prep services charge $200-400/month.
                  At $147 one-time, our guide pays for itself in less than one month—and it's yours forever.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
