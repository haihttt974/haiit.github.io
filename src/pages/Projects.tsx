import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { projects, aboutData } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.
          </p>
          <Button asChild variant="outline">
            <a href={aboutData.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Xem thêm trên GitHub
            </a>
          </Button>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Dự án nổi bật
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <article
                key={project.id}
                className="group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Visual */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden">
                  <div className="text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors">
                    {`<${project.title.split(' ')[0].charAt(0)} />`}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  {project.demo && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Live Demo
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge className="bg-primary/20 text-primary">Featured</Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <p className="text-sm text-muted-foreground mb-6">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border/50">
                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild size="sm">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GitFork className="h-5 w-5 text-primary" />
            Tất cả dự án
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <article
                key={project.id}
                className="group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.github && (
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
