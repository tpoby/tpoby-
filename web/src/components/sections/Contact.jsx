import { useState } from 'react'
import { contactConfig } from '@/config'

/**
 * Contact section - Contact form and social links
 * Provides multiple ways to get in touch
 */
const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('http://localhost:3001/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 3000)
      } else {
        setFormStatus('error')
        setErrorMessage(data.error || '发送失败，请稍后重试')
      }
    } catch (error) {
      console.error('发送邮件错误:', error)
      setFormStatus('error')
      setErrorMessage('网络错误，请检查连接后重试')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-section px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-h2 font-semibold text-neutral-50 text-center mb-12">
          联系我
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-body text-body-lg text-neutral-300 mb-8">
              有问题或想合作?欢迎通过以下方式联系我,或填写表单发送消息。
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center gap-4 text-neutral-300 hover:text-primary-blue transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">{contactConfig.email}</span>
              </a>

              <a
                href={`https://github.com/${contactConfig.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-300 hover:text-primary-blue transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="font-medium">@{contactConfig.githubUsername}</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                  placeholder="您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                  rows="4"
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all resize-y"
                  placeholder="请输入您的留言..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-6 py-3 bg-primary-blue hover:bg-blue-600 disabled:bg-neutral-700 disabled:cursor-not-allowed text-neutral-50 font-semibold rounded-lg transition-all duration-150 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-blue/30"
              >
                {formStatus === 'submitting' ? '发送中...' : '发送消息'}
              </button>

              {formStatus === 'success' && (
                <div className="p-3 bg-success/20 border border-success text-success rounded-lg text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  消息已发送!
                </div>
              )}
              {formStatus === 'error' && (
                <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
