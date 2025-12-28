import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Front-End Developer",
      company: "Self-Taught / Personal Projects",
      period: "2025 – Present",
      description: "A self-taught Front-End Developer focused on building a strong foundation in HTML, CSS, and JavaScript, with hands-on experience using React and Vanilla JavaScript. Actively seeking a suitable opportunity to start a professional career in frontend development.",
      highlights: [
        "Solid understanding of HTML5 and CSS3 with a focus on responsive design",
        "Working with JavaScript to build interactive user interfaces and handle DOM manipulation",
        "Building frontend applications using React and creating reusable components",
        "Applying core React concepts such as State & Props, Components, and Hooks (useState, useEffect)",
        "Developing multiple frontend projects and publishing them on GitHub",
        "Committed to continuous learning through courses and practical experimentation",
        "Seeking an entry-level role as a Junior Front-End Developer or a frontend internship"
      ]
    }
  ];

  return (
    <section id="experience" className="relative bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="section-title mx-auto">
            Professional Path
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and skill development through personal projects and hands-on practice
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.role}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-px h-full bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="card-glass rounded-xl p-6 lg:p-8 hover-lift">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {exp.company}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>

                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
