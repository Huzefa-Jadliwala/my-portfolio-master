import React from 'react';
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience__frontend">
      <h3>{experience.position}</h3>
      <h4 style={{ textAlign: 'center' }}>{experience.company}</h4>
      <h5 style={{ textAlign: 'center' }}>{experience.duration}</h5>

      <div className="experience__content">
        {experience.skills.map((skill, index) => (
          <article key={index} className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>{skill.name}</h4>
              <small className="text-light">{skill.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;