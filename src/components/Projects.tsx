import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImage from "@/img/E-Commerce.png";
import appointmentImage from "@/img/appointment.png";
import weatherImage from "@/img/weather.png";
import moviesImage from "@/img/movies.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with cart management, payment integration, and admin dashboard. Built with performance and scalability in mind.",
      image: ecommerceImage,
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      liveUrl: "https://zaynab-abdallah.github.io/ecommerce-react-app/",
      githubUrl: "https://github.com/zaynab-abdallah/ecommerce-react-app",
      featured: true
    },
    {
      title: "doctor appointment app",
      description: "A doctor appointment app built with Next.js, TypeScript, Tailwind CSS, and Kinde. It allows you to book appointments with doctors and view their availability.",
      image: appointmentImage,
      tech: ["React", "D3.js", "next.js", "Node.js", "kinde"],
      liveUrl: "https://doctor-appointment-urdw.vercel.app/",
      githubUrl: "https://github.com/zaynab-abdallah/doctor-appointment-",
      featured: true
    },
    {
      title: "weather app",
      description: "A weather app built with Next.js, TypeScript, Tailwind CSS, and Firebase. It allows you to search for weather and view their details.",
      image: weatherImage,
      tech: ["React", "Redux Toolkit", "Firebase", "Framer Motion"],
      liveUrl: "https://zaynab-abdallah.github.io/weather-app-main/",
      githubUrl: "https://github.com/zaynab-abdallah/weather-app-main",
      featured: true
    },
    {
      title: "movies app",
      description: "A movie app built with Next.js, TypeScript, Tailwind CSS, and MDX. It allows you to search for movies and view their details.",
      image: moviesImage,
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      liveUrl: "https://zaynab-abdallah.github.io/Movies/",
      githubUrl: "https://github.com/zaynab-abdallah/Movies/settings/pages",
      featured: true
    }
  ];

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="section-title mx-auto">
            Featured Projects
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-glass rounded-2xl overflow-hidden hover-lift group lg:grid lg:grid-cols-2"
            >
              {/* Project Image */}
              <div className="relative aspect-video lg:aspect-auto bg-secondary overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
