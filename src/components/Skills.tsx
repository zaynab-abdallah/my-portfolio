const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 / CSS3", level: 95 },
      ]
    },
    {
      title: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Styled Components", level: 85 },
        { name: "Framer Motion", level: 80 },
        { name: "Figma to Code", level: 85 },
        { name: "Responsive Design", level: 95 },
      ]
    },
    {
      title: "Engineering Practices",
      skills: [
        { name: "Testing (Jest, RTL)", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Performance Optimization", level: 85 },
        { name: "Accessibility (a11y)", level: 85 },
        { name: "Code Review", level: 90 },
      ]
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Vite / Webpack", level: 85 },
        { name: "REST APIs / GraphQL", level: 85 },
        { name: "Vercel / Netlify", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="relative bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Skills
          </span>
          <h2 className="section-title mx-auto">
            Technologies & Expertise
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit refined through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-glass rounded-xl p-6 lg:p-8 hover-lift"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
