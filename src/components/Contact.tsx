import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zaynabshaltout718@gmail.com",
      href: "zaynabshaltout718@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "zaynab-abdallah",
      href: "https://github.com/zaynab-abdallah"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Zaynab Abdallah Shaltout",
      href: "https://www.linkedin.com/in/zaynab-abdallah-shaltout-327235353/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Egypt, Damietta",
      href: null
    }
  ];

  return (
    <section id="contact" className="relative bg-secondary/30">
      <div className="section-container ">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="section-title mx-auto">
            Let's Work Together
          </h2>
          <p className="section-subtitle mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind 
            or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-glass rounded-2xl p-8 lg:p-12 hover-lift">
            {/* Contact grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:hello@johndoe.dev">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="./src/pdf/Zaynab-Abdallah-Shaltout-FlowCV-Resume-20251228 (1).pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
