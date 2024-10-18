import React from 'react';
import './myprojects.css';
import PortfolioIMG from '../../assets/Portfolio.png';
import CommerceIMG from '../../assets/commerce.png';
import EmailIMG from '../../assets/Email.png';
import ProjectCard from './ProjectCard';

const Myprojects = () => {

  const projectData = [
    {
      title: 'Portfolio',
      image: PortfolioIMG,
      techstack: ['React', 'HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/yourproject',
      live: '',
    },
    {
      title: 'E-Commerce Auction Web-App',
      image: CommerceIMG,
      techstack: ['HTML', 'CSS', 'Javascript', 'Python', 'Django', 'Postman'],
      github: 'https://github.com/Huzefa-Jadliwala/Commerce',
      live: '',
    },
    {
      title: 'Gmail Clone',
      image: EmailIMG,
      techstack: ['HTML', 'CSS', 'Javascript', 'Python', 'Django', 'Postman'],
      github: 'https://github.com/Huzefa-Jadliwala/RMA',
      live: '',
    },
    // Add more project data here
  ];

  return (
    <section id='myprojects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Myprojects;
