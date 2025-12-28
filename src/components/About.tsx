import { Code, Users, Zap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I prioritize writing maintainable, readable, and scalable code."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "I optimize every project for speed and efficiency."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "I am a strong communicator who thrives in agile team environments."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "I design experiences that are intuitive and loved by users."
    }
  ];

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-title">
            Building user interfaces with care and continuous learning
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              JavaScript, and hands-on experience building user interfaces using React and Vanilla JavaScript. Over the past two years, I have been consistently learning and applying frontend concepts through personal projects.
              </p>
              <p>
              I focus on writing clean, readable code and building responsive, user-friendly interfaces. Through my projects, I have practiced core frontend skills such as component-based development, state management, and DOM manipulation.
              </p>
              <p>
              I have built and deployed several frontend projects, which are available on GitHub, and I am continuously improving my skills by learning best practices and modern workflows.
              </p>
              <p>
              I am currently seeking an entry-level or junior front-end developer role where I can grow professionally, gain real-world experience, and contribute to a collaborative team.
              </p>
            </div>
          </div>

          {/* Right content - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="card-glass rounded-xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
