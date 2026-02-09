import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { parseString } from 'xml2js'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

// 加载环境变量
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// 中间件
app.use(cors())
app.use(express.json())

/**
 * API 1: 解析博客RSS feed
 * GET /api/blog/feed
 * 返回前6篇博客文章
 */
app.get('/api/blog/feed', async (req, res) => {
  try {
    const rawUrl = typeof req.query.url === 'string' ? req.query.url : ''
    const feedUrl = rawUrl.startsWith('http://') || rawUrl.startsWith('https://')
      ? rawUrl
      : 'https://example.com/feed'

    // 请求RSS feed
    const response = await axios.get(feedUrl, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Homepage-Bot/1.0)'
      }
    })

    // 解析XML
    parseString(response.data, { explicitArray: false }, (err, result) => {
      if (err) {
        console.error('XML解析错误:', err)
        return res.status(500).json({
          success: false,
          error: 'XML解析失败'
        })
      }

      try {
        // 提取文章数据
        const items = result.rss?.channel?.item || []

        // 转换为统一格式
        const posts = items.slice(0, 6).map(item => ({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || '',
          description: item.description || '',
          creator: item['dc:creator'] || item.creator || '',
          categories: item.category || []
        }))

        res.json({
          success: true,
          data: posts,
          total: posts.length
        })
      } catch (error) {
        console.error('数据处理错误:', error)
        res.status(500).json({
          success: false,
          error: '数据处理失败'
        })
      }
    })
  } catch (error) {
    console.error('请求RSS feed错误:', error.message)
    res.status(500).json({
      success: false,
      error: '无法获取博客数据'
    })
  }
})

/**
 * API 2: 发送邮件
 * POST /api/contact/send
 * 使用SMTP发送邮件
 */
app.post('/api/contact/send', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // 验证必填字段
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: '请填写所有必填字段'
      })
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: '邮箱格式不正确'
      })
    }

    // 创建邮件传输器
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // 邮件内容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // 发送给自己
      subject: `来自个人主页的留言 - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">新的留言</h2>
          <p><strong>姓名：</strong> ${name}</p>
          <p><strong>邮箱：</strong> ${email}</p>
          <div style="margin-top: 20px;">
            <p><strong>留言内容：</strong></p>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #888; font-size: 12px;">此邮件来自个人主页</p>
        </div>
      `
    }

    // 发送邮件
    await transporter.sendMail(mailOptions)

    res.json({
      success: true,
      message: '邮件发送成功'
    })
  } catch (error) {
    console.error('发送邮件错误:', error)
    res.status(500).json({
      success: false,
      error: '邮件发送失败'
    })
  }
})

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 后端服务器运行在 http://localhost:${PORT}`)
  console.log(`📧 SMTP配置: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`)
})
