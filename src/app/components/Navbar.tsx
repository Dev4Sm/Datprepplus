import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="border-b border-border/20 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/30 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-xl font-semibold text-white hover:text-white/80 transition-colors"
            >DAT Prep +</a>
          </div>

          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </nav>
  );
}
