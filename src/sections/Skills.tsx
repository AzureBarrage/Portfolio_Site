import { skillsData } from '../data/skills';
import Card from '../components/Card';
import Section from '../components/Section';
import Tag from '../components/Tag';

const Skills = () => {
  return (
    <Section
      id='skills'
      label='Skills'
      title='Technical toolkit'
      subtitle="Programming languages and frameworks I've worked with in production and project environments."
    >
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
        {skillsData.map((skill) => (
          <Card key={skill.id} interactive className='flex flex-col items-center text-center'>
            <img
              className='h-16 w-16 object-contain'
              src={skill.image}
              alt={`${skill.name} logo`}
              loading='lazy'
              width={64}
              height={64}
            />
            <p className='mt-4 font-semibold text-slate-900 dark:text-slate-100'>{skill.name}</p>
            <Tag className='mt-2'>{skill.proficiency}</Tag>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
