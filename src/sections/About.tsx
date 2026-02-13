import Card from '../components/Card';
import Section from '../components/Section';
import { siteConfig } from '../content/site';

const About = () => {
  return (
    <Section
      id='about'
      label='About'
      title='Building practical software with strong UX and maintainable architecture'
      subtitle={siteConfig.person.longBio[0]}
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <Card>
          <h3 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>Background</h3>
          <p className='mt-3 leading-relaxed text-slate-700 dark:text-slate-300'>
            {siteConfig.person.longBio[1]}
          </p>
        </Card>
        <Card>
          <h3 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
            Current Focus
          </h3>
          <ul className='mt-4 space-y-2 text-slate-700 dark:text-slate-300'>
            <li>• Accessible, responsive interfaces with meaningful interaction feedback</li>
            <li>• Clear information architecture that guides users to next actions</li>
            <li>• Reliable frontend foundations with performance-minded implementation</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default About;
