import { Link } from "react-router-dom";
import { ArrowRight, Code2, BookOpen, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/blogData";

export const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar from GitHub */}
          <div className="mb-6 animate-fade-in">
            <img
              src={aboutData.avatar}
              alt={aboutData.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-primary/50 shadow-lg shadow-primary/20"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Code2 className="h-4 w-4" />
            <span>{aboutData.title}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            Xin chào, tôi là{" "}
            <span className="text-gradient">{aboutData.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-2 animate-slide-up">
            @{aboutData.username}
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {aboutData.subtitle} • Chia sẻ kiến thức lập trình và kinh nghiệm thực tế.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="glow-primary">
              <Link to="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                Đọc Blog
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={aboutData.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/about">
                Về tôi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats based on real GitHub data */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">8+</div>
              <div className="text-muted-foreground">Repositories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">9+</div>
              <div className="text-muted-foreground">Ngôn ngữ</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
