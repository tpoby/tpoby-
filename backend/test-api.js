/**
 * 后端API测试脚本
 * 用于验证XML解析和SMTP功能
 */

import axios from 'axios'

const API_BASE = 'http://localhost:3001'

// 测试博客feed解析
async function testBlogFeed() {
  console.log('\n📝 测试博客feed解析API...')
  try {
    const response = await axios.get(`${API_BASE}/api/blog/feed`)
    const data = response.data

    if (data.success) {
      console.log('✅ 博客feed解析成功')
      console.log(`   获取到 ${data.total} 篇文章`)
      console.log(`   第一篇: ${data.data[0].title}`)
      console.log(`   链接: ${data.data[0].link}`)
    } else {
      console.log('❌ 博客feed解析失败:', data.error)
    }
  } catch (error) {
    console.log('❌ 请求错误:', error.message)
  }
}

// 测试健康检查
async function testHealth() {
  console.log('\n🏥 测试健康检查API...')
  try {
    const response = await axios.get(`${API_BASE}/api/health`)
    const data = response.data

    if (data.status === 'ok') {
      console.log('✅ 后端服务运行正常')
      console.log(`   时间戳: ${data.timestamp}`)
    } else {
      console.log('❌ 后端服务异常')
    }
  } catch (error) {
    console.log('❌ 请求错误:', error.message)
  }
}

// 测试邮件发送（需要真实SMTP配置）
async function testSendEmail() {
  console.log('\n📧 测试邮件发送API...')

  const testData = {
    name: '测试用户',
    email: 'test@example.com',
    message: '这是一条测试消息，来自API测试脚本。'
  }

  try {
    const response = await axios.post(`${API_BASE}/api/contact/send`, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = response.data

    if (data.success) {
      console.log('✅ 邮件发送成功')
      console.log(`   消息: ${data.message}`)
    } else {
      console.log('❌ 邮件发送失败:', data.error)
    }
  } catch (error) {
    console.log('❌ 请求错误:', error.message)
  }
}

// 运行所有测试
async function runAllTests() {
  console.log('🚀 开始API测试...\n')
  console.log('=' .repeat(50))

  await testHealth()
  await testBlogFeed()

  // 邮件测试默认跳过，避免频繁发送
  console.log('\n💡 提示: 邮件测试已跳过，如需测试请取消注释下方代码')
  // await testSendEmail()

  console.log('\n' + '='.repeat(50))
  console.log('✨ 测试完成！\n')
}

// 运行测试
runAllTests().catch(console.error)
