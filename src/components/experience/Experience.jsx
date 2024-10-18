import React from 'react'
import './experience.css'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  const experienceData = [{
    position: 'Software Engineer Intern',
    company: 'Watttron',
    duration: '17-Jul-2023 : Present',
    skills: [
      { name: 'Python', level: 'Experienced' },
      { name: 'Flask', level: 'Experienced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Gitlab', level: 'Experienced' },
      { name: 'ReactJs', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Material UI', level: 'Intermediate' },
      { name: 'Bash Scripting', level: 'Intermediate' },
    ],
  }, 
  {
    position: 'Backend Developer',
    company: 'MyNextFilm',
    duration: '16-Jun-2023 : 15-Oct-2023',
    skills: [
      { name: 'Python', level: 'Experienced' },
      { name: 'Django', level: 'Experienced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'ReactJs', level: 'Beginner' },
      { name: 'HTML & CSS', level: 'Experienced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Bootstrap', level: 'Beginner' },
    ],
  },
  {
    position: 'Backend Developer',
    company: 'Bizprospex',
    duration: '01-Jan-2023 : 31-Mar-2023',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'Django', level: 'Intermediate' },
      { name: 'HTML & CSS', level: 'Experienced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Bootstrap', level: 'Beginner' },
    ],
  }
  ];

  return (
    <section id='experience'>

      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
      </div>
    </section>
  )
}

export default Experience