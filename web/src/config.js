/**
 * 站点配置 - 在此文件中修改所有可配置内容
 * LaochenHomePage 开源项目配置
 */

// ==================== 1. 网站基本信息 ====================
export const siteConfig = {
  // 网站标题 (浏览器标签页显示)
  title: "TPoby个人网站",
  // 头像图片路径 (放在 public 目录下)
  avatar: "/self.jpg",
  // GitHub 仓库地址 (用于 Footer 链接)
  githubRepo: "https://github.com/FlashingChen2024/LaochenHomePage",
}

// ==================== 2. Hero 区域 ====================
export const heroConfig = {
  // 主标题 (你的名字)
  name: "TPoby",
  // 欢迎语前缀
  welcomePrefix: "欢迎来到我的网站，我是一名科技爱好者",
  // 个人标签 (打字光标效果)
  tags: ["资源分享博主", "技术博主", "开源爱好者", "机器人爱好者"],
}

// ==================== 3. 关于我区域 ====================
export const aboutConfig = {
  // 简短的 tagline
  tagline: "热爱机器人编程及python语言",
  // 个人描述 (数组，每项为一段)
  bio: [
    "喜欢把复杂问题拆解为简单步骤，持续探索更优雅的实现方式。",
    "关注用户体验与工程质量，记录学习过程与项目实践。"
  ],
  // 经验/状态
  experience: "持续进步中",
  // 座右铭
  philosophy: "用技术创造价值，用产品解决问题",
  // 技能标签
  skills: [
    "前端开发", "React", "Node.js", "TypeScript", "UI/UX", "Git", "DevOps"
  ]
}

// ==================== 4. 项目展示 ====================
export const projectsConfig = [
  {
    id: 1,
    title: "个人博客",
    subtitle: "", // 可选副标题
    description: "记录技术心得与项目复盘，分享最佳实践与解决方案。",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tech: ["Next.js", "MDX"],
    github: null, // GitHub 链接，没有则填 null
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
    subtitle: "",
    description: "用于集中展示作品与案例的轻量级平台，支持标签筛选与内容管理。",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
    tech: ["React", "Node.js"],
    github: "https://github.com/example/project",
    demo: "https://demo.example.com"
  }
]

// ==================== 5. 成长历程 (时间线) ====================
export const timelineConfig = [
  {
    year: "2022",
    title: "起步探索",
    description: "开始系统学习前端开发与产品设计"
  },
  {
    year: "2024",
    title: "项目落地",
    description: "完成多个真实场景项目并持续迭代"
  }
]

// ==================== 6. 博客 RSS ====================
export const blogConfig = {
  // RSS 订阅地址
  rssUrl: "https://example.com/feed",
  // 备用：静态文章列表 (当 RSS 获取失败时显示)
  fallbackPosts: [
    {
      id: 1,
      title: "欢迎使用 LaochenHomePage",
      excerpt: "这是一个开源的个人主页模板，可在配置文件中快速修改内容。",
      date: "2026-01-20",
      readTime: "2 min",
      url: "#"
    }
  ]
}

// ==================== 7. 联系方式 ====================
export const contactConfig = {
  // 邮箱地址
  email: "hello@example.com",
  // GitHub 用户名 (用于显示)
  githubUsername: "yourname",
  // 其他社交链接 (可选)
  socials: {
    // twitter: "https://twitter.com/username",
    // douyin: "https://douyin.com/user/username",
  }
}

// ==================== 导航菜单 ====================
export const navItems = [
  { label: "首页", href: "#hero" },
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "博客", href: "#blog" },
  { label: "成长轨迹", href: "#timeline" },
  { label: "联系", href: "#contact" }
]
