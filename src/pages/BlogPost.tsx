import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, categories } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Bài viết không tồn tại</h1>
          <p className="text-muted-foreground mb-8">
            Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const categoryName = categories.find((c) => c.id === post.category)?.name || post.category;

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại Blog
        </Link>

        {/* Header */}
        <header className="max-w-3xl mb-12">
          <Badge variant="secondary" className="mb-4">
            {categoryName}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="card-gradient border border-border/50 rounded-xl p-8 md:p-12">
                <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {post.content}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Tags */}
              <div className="card-gradient border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="card-gradient border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Chia sẻ
                </h3>
                <Button variant="outline" className="w-full" onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}>
                  Copy Link
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
