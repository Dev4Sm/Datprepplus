import { Card } from "./ui/card";
import { Check, X } from "lucide-react";
import { Badge } from "./ui/badge";

export function Comparison() {
  const features = [
    { feature: "Lifetime access to materials", ourGuide: true, others: false },
    { feature: "One-time payment (no subscriptions)", ourGuide: true, others: false },
    { feature: "Written by 99th percentile scorer", ourGuide: true, others: false },
    { feature: "PhD-level scientific expertise", ourGuide: true, others: false },
    { feature: "Comprehensive biology coverage", ourGuide: true, others: true },
    { feature: "Practice questions included", ourGuide: true, others: true },
    { feature: "Study schedules & strategies", ourGuide: true, others: true },
    { feature: "Advanced test-taking techniques", ourGuide: true, others: false },
    { feature: "Real exam insights from UCSF admit", ourGuide: true, others: false },
    { feature: "Research-backed study methods", ourGuide: true, others: false },
  ];

  return (
    <section className="py-24 bg-gray-900/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Why Choose Us</Badge>
          <h2 className="mb-4 text-4xl tracking-tight text-white">
            How We Compare to Other DAT Prep
          </h2>
          <p className="text-lg text-white/80">
            See why our guide offers superior value and results
          </p>
        </div>

        <Card className="overflow-hidden bg-white/5 border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-white">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-white">Our Guide</span>
                      <Badge variant="default" className="mt-2 bg-yellow-500 text-black">Best Value</Badge>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-white/70">Other Programs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {features.map((item, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.ourGuide ? (
                        <Check className="inline h-6 w-6 text-green-600" />
                      ) : (
                        <X className="inline h-6 w-6 text-muted-foreground/30" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.others ? (
                        <Check className="inline h-6 w-6 text-muted-foreground" />
                      ) : (
                        <X className="inline h-6 w-6 text-destructive" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/70">
            Unlike subscription-based services that require ongoing payments, you own our guide forever.
          </p>
        </div>
      </div>
    </section>
  );
}
