import React from "react";
import "./about.css";
import myImage from "../../assets/my-image2.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Msc. Web Engineering (PG) <br />
                <i>Technical Universitat of Chemnitz</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>1.71</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Scalable Web Apps</li>
                  <li>System Design</li>
                  <li>LLMs</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Web Engineering Postgradute</b> at the Technical
            Universitat of Chemnitz. In a world driven by technology, I am the
            architect of innovation, crafting digital solutions that reshape
            industries. With a dynamic skill set spanning web engineering, cloud
            computing, and data management, I transform ideas into realities.
            Dive into my portfolio to witness a journey of innovation and
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
