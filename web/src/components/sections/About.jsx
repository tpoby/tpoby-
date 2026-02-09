import { aboutConfig } from '@/config'

/**
 * About section - Personal introduction and skills
 * Shows background, experience, and technical skills
 */
const About = () => {
  return (
    <section id="about" className="py-section px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-h2 font-semibold text-neutral-50 text-center mb-12">
          关于我
        </h2>

        <div className="mb-12 space-y-4">
          {aboutConfig.bio.map((paragraph, index) => (
            <p key={index} className="font-body text-body-lg text-neutral-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h3 className="font-heading text-h3 font-semibold text-neutral-50 mb-6 text-center">
            技术栈
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {aboutConfig.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full font-medium hover:bg-primary-blue/20 transition-colors duration-150"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-body text-neutral-400 italic">
            "{aboutConfig.philosophy}"
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
