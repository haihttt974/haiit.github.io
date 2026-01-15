import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Briefcase,
  Code2,
  Music2,
  Download,
  ExternalLink,
} from "lucide-react"
import { Layout } from "@/components/layout/Layout"
import { aboutData } from "@/data/blogData"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useMemo, useRef } from "react"

const About = () => {
  const cvRef = useRef<HTMLElement | null>(null)

  const iconMap = useMemo<Record<string, React.ReactNode>>(
    () => ({
      Github: <Github className="h-5 w-5" />,
      Linkedin: <Linkedin className="h-5 w-5" />,
      Facebook: <Facebook className="h-5 w-5" />,
      Instagram: <Instagram className="h-5 w-5" />,
      Music2: <Music2 className="h-5 w-5" />,
      Twitter: <Twitter className="h-5 w-5" />,
      Mail: <Mail className="h-5 w-5" />,
    }),
    []
  )

  const scrollToCV = () => {
    cvRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="relative mb-8 inline-block">
            <img
              src={aboutData.avatar}
              alt={aboutData.name}
              className="h-32 w-32 rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 animate-glow-pulse md:h-40 md:w-40"
            />
            <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full border-4 border-background bg-green-500" />
          </div>

          <h1 className="mb-2 text-4xl font-bold md:text-5xl">{aboutData.name}</h1>
          <p className="mb-2 text-lg text-muted-foreground">@{aboutData.username}</p>
          <p className="mb-2 text-xl text-primary">{aboutData.title}</p>
          <p className="mb-6 text-muted-foreground">{aboutData.subtitle}</p>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {aboutData.socialLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant="outline"
                size="icon"
                title={link.name}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {iconMap[link.icon] || <ExternalLink className="h-5 w-5" />}
                </a>
              </Button>
            ))}
          </div>

          <Button size="lg" className="glow-primary" onClick={scrollToCV}>
            <Download className="mr-2 h-5 w-5" />
            Xem CV của tôi
          </Button>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="card-gradient rounded-xl border border-border/50 p-6 md:p-8">
              <h2 className="mb-6 flex items-center text-2xl font-semibold">
                <Code2 className="mr-3 h-6 w-6 text-primary" />
                Về tôi
              </h2>
              <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {aboutData.bio}
              </div>
            </section>

            <section className="card-gradient rounded-xl border border-border/50 p-6 md:p-8">
              <h2 className="mb-6 flex items-center text-2xl font-semibold">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                Kinh nghiệm
              </h2>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-primary/30 pl-6 transition-colors hover:border-primary"
                  >
                    <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="mb-2 text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {aboutData.skills.map((skillGroup, index) => (
              <section
                key={index}
                className="card-gradient rounded-xl border border-border/50 p-6"
              >
                <h2 className="mb-4 text-lg font-semibold">{skillGroup.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
            ))}

            <section className="card-gradient rounded-xl border border-border/50 p-6">
              <h2 className="mb-4 text-xl font-semibold">Liên hệ</h2>
              <div className="space-y-3">
                <a
                  href={`mailto:${aboutData.social.email}`}
                  className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="mr-3 h-4 w-4 flex-shrink-0" />
                  {aboutData.social.email}
                </a>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-3 h-4 w-4 flex-shrink-0" />
                  Vietnam
                </div>
              </div>
            </section>

            <section className="card-gradient rounded-xl border border-primary/50 p-6 text-center">
              <h3 className="mb-2 font-semibold">Muốn hợp tác?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Tôi luôn sẵn sàng thảo luận về các dự án thú vị.
              </p>
              <Button asChild className="w-full">
                <a href={`mailto:${aboutData.social.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Liên hệ ngay
                </a>
              </Button>
            </section>
          </div>
        </div>

        {/* CV Section */}
        <section
          ref={cvRef}
          className="mx-auto mt-16 max-w-4xl scroll-mt-24"
        >
          <div className="card-gradient rounded-xl border border-border/50 p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="flex items-center text-2xl font-semibold">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                Curriculum Vitae
              </h2>

              {/* tải PDF từ public/, không reload app */}
              <Button asChild variant="outline" size="sm">
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Tải PDF
                </a>
              </Button>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col gap-6 border-b border-border/50 pb-8 md:flex-row">
                <img
                  src={aboutData.avatar}
                  alt={aboutData.name}
                  className="h-24 w-24 rounded-lg border-2 border-primary/30"
                />
                <div>
                  <h3 className="text-2xl font-bold">{aboutData.name}</h3>
                  <p className="text-lg text-primary">{aboutData.title}</p>
                  <p className="text-muted-foreground">{aboutData.subtitle}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" /> {aboutData.social.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Github className="h-4 w-4" /> @{aboutData.username}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold">Kỹ năng kỹ thuật</h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {aboutData.skills.map((skillGroup, index) => (
                    <div key={index}>
                      <p className="mb-2 text-sm font-medium text-primary">
                        {skillGroup.category}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {skillGroup.items.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold">Dự án tiêu biểu (từ GitHub)</h4>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted/30 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h5 className="font-medium">Capital Weather Tracker</h5>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hệ thống xử lý dữ liệu thời tiết real-time cho các thủ đô thế giới sử dụng OpenWeatherMap API.
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h5 className="font-medium">BookStore ASP.NET</h5>
                      <Badge variant="secondary">C# / ASP.NET</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hệ thống quản lý hiệu sách full-stack với Entity Framework và SQL Server.
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h5 className="font-medium">Sorting Visualizer</h5>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ứng dụng trực quan hóa thuật toán sắp xếp với animation mượt mà.
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h5 className="font-medium">GPLX Mobile App</h5>
                      <Badge variant="secondary">Dart / Flutter</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ứng dụng mobile cross-platform ôn thi giấy phép lái xe.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold">Hoạt động khác</h4>
                <div className="rounded-lg bg-muted/30 p-4">
                  <h5 className="mb-1 font-medium">Gia sư Toán học</h5>
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
  )
}

export default About
