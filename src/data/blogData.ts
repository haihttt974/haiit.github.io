export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const categories: Category[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Deep dives into various programming languages, syntax, paradigms, and best use cases",
    icon: "Code2",
    color: "category-languages",
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    description: "Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",
    icon: "Layers",
    color: "category-frameworks",
  },
  {
    id: "architecture",
    name: "Software Architecture",
    description: "System design principles, architectural patterns, and scalability strategies",
    icon: "Building2",
    color: "category-architecture",
  },
  {
    id: "patterns",
    name: "Design Patterns",
    description: "Classic and modern design patterns with practical implementations",
    icon: "Shapes",
    color: "category-patterns",
  },
  {
    id: "practices",
    name: "Best Practices",
    description: "Coding standards, clean code principles, and industry best practices",
    icon: "CheckCircle",
    color: "category-practices",
  },
  {
    id: "roadmap",
    name: "Learning Roadmaps",
    description: "Structured learning paths for different programming domains and skill levels",
    icon: "Map",
    color: "category-roadmap",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-solid-principles",
    title: "Understanding SOLID Principles in Modern Software Development",
    excerpt: "A comprehensive guide to SOLID principles with practical examples in TypeScript and real-world applications.",
    content: `# Understanding SOLID Principles

SOLID is an acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable...

## Single Responsibility Principle (SRP)
A class should have only one reason to change...

## Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification...`,
    category: "patterns",
    tags: ["SOLID", "OOP", "TypeScript", "Clean Code"],
    date: "2024-01-15",
    readTime: "12 min",
    featured: true,
  },
  {
    id: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt: "Learn how to identify and fix performance bottlenecks in React applications using profiling tools and optimization patterns.",
    content: `# React Performance Optimization

Performance is crucial for user experience. Let's explore advanced techniques...`,
    category: "frameworks",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    date: "2024-01-10",
    readTime: "15 min",
    featured: true,
  },
  {
    id: "typescript-advanced-types",
    title: "Mastering TypeScript Advanced Types",
    excerpt: "Deep dive into conditional types, mapped types, template literal types, and type inference in TypeScript.",
    content: `# Advanced TypeScript Types

TypeScript's type system is incredibly powerful...`,
    category: "languages",
    tags: ["TypeScript", "Types", "JavaScript"],
    date: "2024-01-08",
    readTime: "18 min",
  },
  {
    id: "microservices-architecture",
    title: "Building Scalable Microservices Architecture",
    excerpt: "Design patterns, communication strategies, and deployment considerations for microservices systems.",
    content: `# Microservices Architecture

Modern applications require scalable, maintainable architectures...`,
    category: "architecture",
    tags: ["Microservices", "Docker", "Kubernetes", "System Design"],
    date: "2024-01-05",
    readTime: "20 min",
    featured: true,
  },
  {
    id: "clean-code-practices",
    title: "Writing Clean, Maintainable Code",
    excerpt: "Essential practices for writing code that is easy to read, understand, and maintain over time.",
    content: `# Clean Code Practices

Clean code is not just about aesthetics—it's about maintainability...`,
    category: "practices",
    tags: ["Clean Code", "Refactoring", "Best Practices"],
    date: "2024-01-03",
    readTime: "10 min",
  },
  {
    id: "frontend-developer-roadmap-2024",
    title: "Frontend Developer Roadmap 2024",
    excerpt: "A comprehensive learning path for becoming a proficient frontend developer in 2024.",
    content: `# Frontend Developer Roadmap 2024

Start your journey to becoming a frontend developer...`,
    category: "roadmap",
    tags: ["Roadmap", "Frontend", "Career", "Learning"],
    date: "2024-01-01",
    readTime: "25 min",
  },
];

// Projects từ GitHub thực tế của haihttt974
export const projects: Project[] = [
  {
    id: "capital-weather-tracker",
    title: "Capital Weather Tracker",
    description: "Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",
    longDescription: "Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",
    technologies: ["Python", "OpenWeatherMap API", "Data Processing"],
    github: "https://github.com/haihttt974/capital-weather-tracker",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description: "Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",
    longDescription: "Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",
    technologies: ["TypeScript", "Algorithms", "Visualization"],
    github: "https://github.com/haihttt974/sorting-visualizer",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "bookstore-aspnet",
    title: "BookStore ASP.NET",
    description: "Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",
    longDescription: "Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
    github: "https://github.com/haihttt974/thltweb-BookStore-asp.net",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "gplx-mobile-app",
    title: "Ôn thi GPLX Mobile",
    description: "Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",
    longDescription: "Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",
    technologies: ["Dart", "Flutter", "Mobile Development"],
    github: "https://github.com/haihttt974/ltmobile_gplx",
    image: "/placeholder.svg",
  },
  {
    id: "temperature-influxdb",
    title: "Temperature VN InfluxDB",
    description: "Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",
    longDescription: "Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",
    technologies: ["Python", "InfluxDB", "IoT", "Time Series"],
    github: "https://github.com/haihttt974/send-temperature-vn-influxdb",
    image: "/placeholder.svg",
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree Effect",
    description: "Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",
    longDescription: "Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/christmas_tree.github.io",
    demo: "https://haihttt974.github.io/christmas_tree.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "countdown-newyear",
    title: "Countdown New Year",
    description: "Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",
    longDescription: "Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/haihttt974/CountdownNewYear.github.io",
    demo: "https://haihttt974.github.io/CountdownNewYear.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "firework-effect",
    title: "Firework Effect",
    description: "Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",
    longDescription: "Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",
    technologies: ["HTML5", "Canvas", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/Hfirework.github.io",
    demo: "https://haihttt974.github.io/Hfirework.github.io/",
    image: "/placeholder.svg",
  },
];

// Thông tin cá nhân từ GitHub của Lê Duy Hải (haihttt974)
export const aboutData = {
  name: "Lê Duy Hải",
  nickname: "Hai IT",
  username: "haihttt974",
  title: "Information Systems Developer",
  subtitle: "Database • Server-side • DevOps",
  avatar: "https://avatars.githubusercontent.com/u/202379592?v=4",
  bio: `Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,
  
  skills: [
    {
      category: "Ngôn ngữ lập trình",
      items: ["C", "C++", "C#", "Java", "PHP", "Python", "JavaScript", "TypeScript", "Dart"],
    },
    {
      category: "Backend & Database",
      items: [".NET Core", "ASP.NET", "MySQL", "SQL Server", "MariaDB", "InfluxDB"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub", "GitLab", "Google Cloud", "Fly.io", "Postman", "Swagger"],
    },
    {
      category: "Frontend & Design",
      items: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Figma", "Canva"],
    },
    {
      category: "Data Science / AI",
      items: ["TensorFlow", "Keras", "NumPy", "Pandas", "scikit-learn", "SciPy"],
    },
  ],

  social: {
    github: "https://github.com/haihttt974",
    linkedin: "https://www.linkedin.com/in/haild/",
    facebook: "https://facebook.com/haiit.974",
    instagram: "https://instagram.com/haiit.974",
    tiktok: "https://tiktok.com/@haiit.974",
    twitter: "https://x.com/haiit974",
    email: "leduyhai090704@gmail.com",
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/haihttt974", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/haild/", icon: "Linkedin" },
    { name: "Facebook", url: "https://facebook.com/haiit.974", icon: "Facebook" },
    { name: "Instagram", url: "https://instagram.com/haiit.974", icon: "Instagram" },
    { name: "TikTok", url: "https://tiktok.com/@haiit.974", icon: "Music2" },
    { name: "X (Twitter)", url: "https://x.com/haiit974", icon: "Twitter" },
    { name: "Email", url: "mailto:leduyhai090704@gmail.com", icon: "Mail" },
  ],

  experience: [
    {
      title: "Information Systems Developer",
      company: "Freelance & Personal Projects",
      period: "2023 - Hiện tại",
      description: "Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps.",
    },
    {
      title: "Math Tutor",
      company: "Private Tutoring",
      period: "2022 - Hiện tại",
      description: "Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề.",
    },
  ],
};
