import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import laurelImage from "../../imports/Untitled_design.svg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="mb-6 text-5xl tracking-tight sm:text-6xl text-white">
            Master the DAT with Expert Guidance
          </h1>

          <p className="mb-10 text-lg text-white/80 leading-relaxed">
            Created by a PhD microbiologist with peer-reviewed publications who scored in the
            99th percentile and gained acceptance to UCSF—one of the most prestigious dental schools in the nation.
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="text-base group relative overflow-visible bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/30 border border-yellow-500/80">
              <span className="relative z-10">Get Your Guide Now</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <span className="absolute inset-0 rounded-full border border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-700 shadow-[0_0_15px_rgba(234,179,8,0.5)] opacity-0 group-hover:opacity-100"></span>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>One-Time Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
