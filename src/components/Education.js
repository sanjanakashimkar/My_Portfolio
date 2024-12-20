import React from 'react';
import EducationCard from './Educationcard';
import './Education.css';
import headerImg from "../assets/img/banner-bg.png"; 
import guruImage from "../assets/img/guru logo.png";
import kdkImage from "../assets/img/kdk logo.jpeg";
import somalwarImage from "../assets/img/somalwar logo.jpeg";
import lokanchi from "../assets/img/lokanchi.jpg";


const Education = () => {
  const educationData = [
    {
      logo: guruImage,
      institution: "Guru Nanak Institude of Technology, Nagpur",
      degree: "Bachelor of Engineering - Computer Science and engineering",
      duration: "Aug 2020 - December 2023",
      grade: "6.52 CGPA",
      description: "I completed my Bachelor's degree in Computer Science and engineering from  Guru Nanak Institude of Technology, Nagpur ."
    },
    {
      logo: kdkImage,
      institution: "Nagpur Polytechnic Nagpur (KDK collage of Engineering), Nagpur",
      diploma: "Computer Technology",
      duration: "July 2018 - Aug 2019",
      grade: "64.71%",
      description: "I completed my diploma in Computer Technology from Nagpur Polytechnic Nagpur (KDK collage of Engineering) , Nagpur."
    },
    {
      logo: lokanchi,
      institution: "M P Dev Smirti Lokanchi Shala, Nagpur",
      degree: "HSC(Xii)",
      duration: "June 2016 - Apr 2017",
      // grade: "64.60%",
      description: "I completed my class 12th education in Science Stream From M P Dev Smirti Lokanchi Shala,Nagpur. "
    },
    {
      logo: somalwarImage,
      institution: "Somalwar High School, Nagpur",
      degree: "SSC(X)",
      duration: "June 2014 - Apr 2015",
      grade: "64.60%",
      description: "I completed my class 10 education at Somalwar High School, Nagpur."
    }
  ];

  return (
    <div className="education-section">              
      <h1 className="section-title">Education</h1>
      <p className="section-description">
      "My educational journey has been a pathway to exploration, learning, and shaping my aspirations. Here's a glimpse of the milestones I've achieved."
      </p>
      <div className="timeline-container">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            {...education}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;

