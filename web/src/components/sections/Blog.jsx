import { useState, useEffect } from 'react'
import { blogConfig } from '@/config'

/**
 * Blog section - Preview of blog posts
 * Displays article cards with title, excerpt, and metadata
 * Fetches data from backend API
 */
const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/blog/feed?url=${encodeURIComponent(blogConfig.rssUrl)}`
        )
        const data = await response.json()

        if (data.success) {
          const formattedPosts = data.data.map((item, index) => ({
            id: index + 1,
            title: item.title,
            excerpt: item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
            date: new Date(item.pubDate).toLocaleDateString('zh-CN'),
            readTime: '5 min',
            url: item.link
          }))
          setPosts(formattedPosts)
        } else {
          setError('获取博客文章失败')
        }
      } catch (err) {
        console.error('获取博客文章错误:', err)
        setError('无法连接到博客服务')
        setPosts(blogConfig.fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return (
    <section id="blog" className="py-section px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-h2 font-semibold text-neutral-50 text-center mb-12">
          技术文章
        </h2>

        {loading && (
          <div className="text-center text-neutral-400">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-pink"></div>
            <p className="mt-4">加载中...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-error bg-error/10 border border-error rounded-lg p-6">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-primary-pink hover:shadow-lg hover:shadow-primary-pink/20 transition-all duration-250 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading text-xl font-semibold text-neutral-50 mb-3 group-hover:text-primary-pink transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="font-body text-body text-neutral-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}阅读</span>
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-pink font-medium hover:gap-2 transition-all group"
                >
                  阅读更多
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
