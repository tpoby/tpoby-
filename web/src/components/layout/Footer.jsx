import { siteConfig } from '@/config'

/**
 * Footer - Simple footer with open-source credit
 */
export const Footer = () => {
  return (
    <footer className="bg-neutral-900/50 border-t border-neutral-800 py-8 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-body text-neutral-500 text-sm">
          采用开源项目{' '}
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-cyan hover:text-primary-blue transition-colors"
          >
            laochenhomepage
          </a>
          {' '}构建
        </p>
      </div>
    </footer>
  )
}
