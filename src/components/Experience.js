import React from 'react';
import ExperienceCard from './Experiencecard';
import './ExperiencePage.css';
import headerImg from "../assets/img/banner-bg.png";
import psk from "../assets/img/psklogo2.jpeg";


const experiences = [
  {
    title: "Mern stack developer",
    company: "PSK Technologies Pvt.Ltd",
    date: "August 2024 - Present",
    description: "Collaborating on diverse open-source projects to gain hands-on experience, enhance technical skills, and learn directly from industry leaders and experts in the field.",
    skills: ["Mongodb", "Expressjs", "Nodejs", "Reactjs", "HTML", "Css", "JavaScript"],
    logo: psk
  },
  {
    title: "Graphic Designer and Digital Marketer",
    company: "PSK Technologies Pvt.Ltd",
    date: "january 2023 - August 2024",
    description: "Dynamic and innovative professional with expertise in graphic design and digital marketing. Driven by a passion for creating captivating visuals and crafting impactful marketing campaigns that deliver measurable results.",
    skills: ["Canva", "PosterMyWall", "Renderforest", "SEO", "Search engine Optimization", "Vn Editor"],
    logo: psk
  },
  // {
  //   title: "Fullstack Externship",
  //   company: "PWC",
  //   date: "July - Sep 2023",
  //   description: "Built an employee management full stack web app used Docker and deployed on AWS EC2. I was the top performer in the program.",
  //   skills: ["ReactJS", "Redux", "NodeJs", "Material UI", "HTML", "CSS", "JavaScript", "Docker", "AWS", "MongoDB"],
  //   logo: "/placeholder.svg"
  // },
  // {
  //   title: "Open Source Contributor",
  //   company: "Multiple Projects",
  //   date: "2023",
  //   description: "Contributing to different open-source projects and learn from industry experts",
  //   skills: [],
  //   logo: "/placeholder.svg"
  // },
  // {
  //   title: "Android Developer",
  //   company: "GDSC",
  //   date: "2022-2023",
  //   description: "As an Android developer at the Google Developers Student Club (GDSC), I have had the opportunity to work on exciting projects and collaborate with talented developers. Through my involvement in various Android development initiatives at GDSC, I have also had the opportunity to host and participate in numerous workshops.",
  //   skills: ["Leadership", "Mobile Application Development", "Kotlin", "XML", "Figma"],
  //   logo: "/placeholder.svg"
  // },
  // {
  //   title: "Android Developer Intern",
  //   company: "Australian Welfare Foundation",
  //   date: "June 2023 - October 2023",
  //   description: "As an Android developer intern at Australian Welfare Foundation from June 2023 to October 2023, I gained valuable hands-on experience in application development. During this internship, I contributed to the development of the application's back-end cloud functions using Firebase and implemented various features.",
  //   skills: ["Android", "Java", "Kotlin", "XML", "Node.js", "Cloud Firestore", "Firebase", "Figma"],
  //   logo: "/placeholder.svg"
  // }
];

const Experience = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      className="experience-page"
    >
      <div className="experience-container">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-subtitle">
          My work experience as a software engineer and working on different companies and projects.
        </p>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
