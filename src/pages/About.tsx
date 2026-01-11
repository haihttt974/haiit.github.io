import { Github, Linkedin, Facebook, Instagram, Twitter, Mail, MapPin, Briefcase, Code2, Music2, Download, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { aboutData } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Facebook: <Facebook className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
  Music2: <Music2 className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
  Mail: <Mail className="h-5 w-5" />,
};

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Avatar from GitHub */}
          <div className="relative inline-block mb-8">
            <img
              src={aboutData.avatar}
              alt={aboutData.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 animate-glow-pulse"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {aboutData.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            @{aboutData.username}
          </p>
          <p className="text-xl text-primary mb-2">
            {aboutData.title}
          </p>
          <p className="text-muted-foreground mb-6">
            {aboutData.subtitle}
          </p>

          {/* Social Links from GitHub */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {aboutData.socialLinks.map((link) => (
              <Button key={link.name} asChild variant="outline" size="icon" title={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {iconMap[link.icon] || <ExternalLink className="h-5 w-5" />}
                </a>
              </Button>
            ))}
          </div>

          {/* CV Download Button */}
          <Button asChild size="lg" className="glow-primary">
            <a href="#cv-section">
              <Download className="mr-2 h-5 w-5" />
              Xem CV của tôi
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-8">
            <section className="card-gradient border border-border/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Code2 className="h-6 w-6 mr-3 text-primary" />
                Về tôi
              </h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {aboutData.bio}
              </div>
            </section>

            {/* Experience */}
            <section className="card-gradient border border-border/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                Kinh nghiệm
              </h2>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills by Category */}
            {aboutData.skills.map((skillGroup, index) => (
              <section key={index} className="card-gradient border border-border/50 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">{skillGroup.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section className="card-gradient border border-border/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Liên hệ</h2>
              <div className="space-y-3">
                <a
                  href={`mailto:${aboutData.social.email}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  {aboutData.social.email}
                </a>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                  Vietnam
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="card-gradient border border-primary/50 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Muốn hợp tác?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tôi luôn sẵn sàng thảo luận về các dự án thú vị.
              </p>
              <Button asChild className="w-full">
                <a href={`mailto:${aboutData.social.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Liên hệ ngay
                </a>
              </Button>
            </section>
          </div>
        </div>

        {/* CV Section */}
        <section id="cv-section" className="max-w-4xl mx-auto mt-16 scroll-mt-24">
          <div className="card-gradient border border-border/50 rounded-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold flex items-center">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                Curriculum Vitae
              </h2>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Tải PDF
              </Button>
            </div>

            {/* CV Content based on GitHub projects */}
            <div className="space-y-8">
              {/* Personal Info */}
              <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-border/50">
                <img
                  src={aboutData.avatar}
                  alt={aboutData.name}
                  className="w-24 h-24 rounded-lg border-2 border-primary/30"
                />
                <div>
                  <h3 className="text-2xl font-bold">{aboutData.name}</h3>
                  <p className="text-primary text-lg">{aboutData.title}</p>
                  <p className="text-muted-foreground">{aboutData.subtitle}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" /> {aboutData.social.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Github className="h-4 w-4" /> @{aboutData.username}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Kỹ năng kỹ thuật</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aboutData.skills.map((skillGroup, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium text-primary mb-2">{skillGroup.category}</p>
                      <p className="text-sm text-muted-foreground">{skillGroup.items.join(" • ")}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects from GitHub */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Dự án tiêu biểu (từ GitHub)</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Capital Weather Tracker</h5>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hệ thống xử lý dữ liệu thời tiết real-time cho các thủ đô thế giới sử dụng OpenWeatherMap API.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">BookStore ASP.NET</h5>
                      <Badge variant="secondary">C# / ASP.NET</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hệ thống quản lý hiệu sách full-stack với Entity Framework và SQL Server.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Sorting Visualizer</h5>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ứng dụng trực quan hóa thuật toán sắp xếp với animation mượt mà.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">GPLX Mobile App</h5>
                      <Badge variant="secondary">Dart / Flutter</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ứng dụng mobile cross-platform ôn thi giấy phép lái xe.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Others */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Hoạt động khác</h4>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h5 className="font-medium mb-1">Gia sư Toán học</h5>
                  <p className="text-sm text-muted-foreground">
                    Hướng dẫn học sinh phát triển tư duy logic và kỹ năng giải quyết vấn đề thông qua Toán học.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
