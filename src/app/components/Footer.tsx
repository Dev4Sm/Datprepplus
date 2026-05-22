import { useState } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function Footer() {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-white">DAT Mastery Guide</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Your comprehensive resource for DAT success, created by a PhD scientist who achieved
              99th percentile and gained admission to UCSF Dental School.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="#learn-from-excellence"
                  onClick={(e) => { e.preventDefault(); document.getElementById("learn-from-excellence")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >About the Author</a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => { e.preventDefault(); document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >Testimonials</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Get in Touch</h4>
            <p className="text-sm text-white/70 mb-4">
              Have questions? We're here to help you succeed.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => setShowConfirm(true)}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>

        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[#0d1f17] border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20">
                  <Mail className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-white text-lg">Open Email?</h3>
              </div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                This will open your email client to send a message to <span className="text-white">datprepplus@gmail.com</span>.
              </p>
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black"
                  onClick={() => {
                    window.location.href = "mailto:datprepplus@gmail.com";
                    setShowConfirm(false);
                  }}
                >
                  Yes, open email
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                  onClick={() => setShowConfirm(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </div>
        )}


        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2026 DAT Mastery Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
