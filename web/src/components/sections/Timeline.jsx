import { timelineConfig } from '@/config'

/**
 * Timeline section - Visual timeline showing key milestones
 * Features gradient line, animated badges, and responsive design
 */
const Timeline = () => {
  return (
    <section id="timeline" className="py-section px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-pink/5 via-transparent to-primary-blue/5 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-primary-blue mb-4">
            成长轨迹
          </h2>
          <p className="font-body text-body-lg text-neutral-400 max-w-2xl mx-auto">
            记录每一个重要时刻，见证成长的足迹
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-pink via-primary-blue to-primary-pink transform -translate-x-1/2" />

          <div className="space-y-12">
            {timelineConfig.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative flex flex-col md:flex-row items-center gap-8 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`
                  flex-1 text-center md:text-right
                  ${index % 2 === 0 ? 'md:pr-12' : 'md:order-3 md:pl-12'}
                `}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-heading font-bold text-lg shadow-lg transform transition-transform duration-300 hover:scale-110">
                      {milestone.year}
                    </div>
                    <div className="text-primary-blue transform transition-transform duration-300 hover:scale-125 hover:rotate-12">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-neutral-50 mb-3">
                    {milestone.title}
                  </h3>

                  <p className="font-body text-neutral-400 leading-relaxed max-w-md mx-auto md:ml-auto">
                    {milestone.description}
                  </p>
                </div>

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-neutral-950 shadow-lg transform transition-transform duration-300 hover:scale-150 z-10" />
                </div>

                <div className={`flex-1 hidden md:block ${index % 2 === 0 ? '' : 'md:order-2'}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-neutral-500 text-sm">
            <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary-blue/50" />
            <span>精彩继续</span>
            <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary-blue/50" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
