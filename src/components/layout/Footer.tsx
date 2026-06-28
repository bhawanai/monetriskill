import { Youtube, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                M
              </div>
              <span className="font-semibold text-white text-lg">MonetriSkill</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Helping beginners discover practical ways to earn money using AI — one skill at a time.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://youtube.com/@monetriskill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://instagram.com/monetriskill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@monetriskill.com"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {["AI Income Paths", "Free Tutorials", "Prompt Library", "Community"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} MonetriSkill. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms</a>
            <a href="mailto:hello@monetriskill.com" className="text-xs text-white/25 hover:text-white/50 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
