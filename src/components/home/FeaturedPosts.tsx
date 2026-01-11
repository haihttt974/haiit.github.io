import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts, categories } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FeaturedPosts = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bài viết <span className="text-gradient">nổi bật</span>
            </h2>
            <p className="text-muted-foreground">
              Những bài viết được đọc nhiều nhất
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link to="/blog">
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {getCategoryName(post.category)}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("vi-VN")}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary text-sm font-medium flex items-center hover:gap-2 transition-all"
                  >
                    Đọc thêm
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link to="/blog">
              Xem tất cả bài viết
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
