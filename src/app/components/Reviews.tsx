import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      initials: "SM",
      school: "Pre-Dental Student",
      rating: 5,
      text: "This guide was a game-changer! The biology section alone is worth the price. Scored 24 on my DAT and got into my dream school.",
      score: "DAT Score: 24"
    },
    {
      name: "James K.",
      initials: "JK",
      school: "UCLA Dental School",
      rating: 5,
      text: "Finally, a guide written by someone who actually took the test recently and knows what it's like. The test-taking strategies were invaluable.",
      score: "DAT Score: 23"
    },
    {
      name: "Maria R.",
      initials: "MR",
      school: "Pre-Dental Student",
      rating: 5,
      text: "I was using a subscription service before, spending $300/month. This guide gave me everything I needed for a fraction of the cost. Best investment I made!",
      score: "DAT Score: 22"
    },
    {
      name: "David L.",
      initials: "DL",
      school: "Columbia Dental",
      rating: 5,
      text: "The PhD-level biology insights made complex topics so much clearer. You can tell this was written by an expert who truly understands the science.",
      score: "DAT Score: 25"
    },
    {
      name: "Emily T.",
      initials: "ET",
      school: "Pre-Dental Student",
      rating: 5,
      text: "Love that I can keep this guide forever and refer back to it. No stress about subscriptions expiring before my test date!",
      score: "DAT Score: 23"
    },
    {
      name: "Michael C.",
      initials: "MC",
      school: "UCSF Dental School",
      rating: 5,
      text: "Studied with this guide and got into UCSF just like the author! The study schedule kept me organized and the practice questions were spot-on.",
      score: "DAT Score: 24"
    }
  ];

  return (
    <section className="py-24 bg-gray-900/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-4xl tracking-tight text-white">
            Success Stories
          </h2>
          <p className="text-lg text-white/80">
            Join hundreds of students who achieved their dental school dreams
          </p>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
            ))}
            <span className="ml-2 text-white/70">4.9/5.0 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white/5 border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-yellow-500/20 text-yellow-500">{review.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{review.name}</span>
                  </div>
                  <p className="text-sm text-white/60">{review.school}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-sm mb-3 leading-relaxed text-white/80">{review.text}</p>

              <div className="pt-3 border-t border-white/10">
                <span className="text-sm font-medium text-yellow-500">{review.score}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
