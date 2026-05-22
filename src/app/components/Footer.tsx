import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function Footer() {
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
              <li><a href="#" className="hover:text-white transition-colors">About the Author</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sample Chapter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Get in Touch</h4>
            <p className="text-sm text-white/70 mb-4">
              Have questions? We're here to help you succeed.
            </p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2026 DAT Mastery Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
