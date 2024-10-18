import React from 'react';
import './myprojects.css';

const ProjectCard = ({ project }) => {
  return (
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <small className='text-light'>
        {project.techstack.join(' | ')}
      </small>
      <div className="portfolio__item-cta">
        {project.github && (
          <a href={project.github} target="_blank" rel='noreferrer' className='btn'>Github</a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
