// 个人信息
export const about = {
  name: "你的名字",
  tagline: "全栈开发者 | 技术博主 | 开源爱好者 | 终身学习者",
  bio: [
    "喜欢把复杂问题拆解为简单步骤，持续探索更优雅的实现方式。",
    "关注用户体验与工程质量，记录学习过程与项目实践。"
  ],
  experience: "持续进步中",
  philosophy: "用技术创造价值，用产品解决问题",
  skills: [
    "前端开发",
    "React",
    "Node.js",
    "TypeScript",
    "UI/UX",
    "Git",
    "DevOps"
  ]
}

// 项目数据
export const projects = [
  {
    id: 1,
    title: "个人博客",
    description: "记录技术心得与项目复盘，分享最佳实践与解决方案。",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tech: ["Next.js", "MDX"],
    github: null,
    demo: "https://blog.example.com"
  },
  {
    id: 2,
    title: "自动化备份工具",
    subtitle: "BackupFlow",
    description: "自动化备份与版本归档工具，提升数据安全与恢复效率。",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tech: ["Python", "CLI"],
    github: null,
    demo: "https://atz.example.com"
  },
  {
    id: 3,
    title: "作品展示平台",
    description: "用于集中展示作品与案例的轻量级平台，支持标签筛选与内容管理。",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: null,
    demo: "https://demo.example.com"
  }
]

// 博客文章数据
export const blogPosts = [
  {
    id: 1,
    title: "如何搭建个人知识库",
    excerpt: "从工具选型到内容组织，分享搭建知识库的完整思路与实践经验。",
    date: "2026-01-10",
    readTime: "8 min",
    url: "#"
  },
  {
    id: 2,
    title: "产品设计中的信息架构",
    excerpt: "用清晰的信息架构提升用户体验，从需求到落地的关键方法。",
    date: "2026-01-05",
    readTime: "6 min",
    url: "#"
  },
  {
    id: 3,
    title: "构建高可用前端工程",
    excerpt: "从代码规范到部署策略，提升前端工程的稳定性与可维护性。",
    date: "2025-12-28",
    readTime: "10 min",
    url: "#"
  },
  {
    id: 4,
    title: "从 0 到 1 设计作品集",
    excerpt: "如何规划作品集内容结构，展示项目亮点与个人优势。",
    date: "2025-12-20",
    readTime: "5 min",
    url: "#"
  },
  {
    id: 5,
    title: "高效协作的代码评审流程",
    excerpt: "建立可持续的评审机制，让团队协作更高效。",
    date: "2025-12-15",
    readTime: "12 min",
    url: "#"
  },
  {
    id: 6,
    title: "性能优化的实践清单",
    excerpt: "分享一套可执行的性能优化清单，覆盖前端加载与运行阶段。",
    date: "2025-12-10",
    readTime: "15 min",
    url: "#"
  }
]

// 社交链接
export const socialLinks = {
  github: "https://github.com/yourname",
  douyin: "https://douyin.com/user/yourname",
  email: "mailto:hello@example.com"
}

// 导航菜单
export const navItems = [
  { label: "首页", href: "#hero" },
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "博客", href: "#blog" },
  { label: "成长轨迹", href: "#timeline" },
  { label: "联系", href: "#contact" }
]
