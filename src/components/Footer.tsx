import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Zaynab Shaltout. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="h-3 w-3 text-primary" /> using React & Tailwind
            </p>
          </div>

          {/* Right - Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@johndoe.dev"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
