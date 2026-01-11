import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FeaturedProjects = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dự án <span className="text-gradient">nổi bật</span>
            </h2>
            <p className="text-muted-foreground">
              Những dự án cá nhân tôi đã xây dựng
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link to="/projects">
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted flex items-center justify-center border-b border-border/50">
                <div className="text-6xl font-mono text-primary/30">
                  {`<${project.title.charAt(0)} />`}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link to="/projects">
              Xem tất cả dự án
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
