import { Link } from "react-router-dom";
import { Code2, Layers, Building2, Shapes, CheckCircle, Map, ArrowRight } from "lucide-react";
import { categories } from "@/data/blogData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layers,
  Building2,
  Shapes,
  CheckCircle,
  Map,
};

export const CategoryGrid = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khám phá các <span className="text-gradient">chủ đề</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Từ ngôn ngữ lập trình đến system design, tìm hiểu mọi khía cạnh của software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <Link
                key={category.id}
                to={`/blog?category=${category.id}`}
                className="group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                  {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Xem bài viết
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
