import React from 'react';
import './Education.css';

const EducationCard = ({ 
  logo, 
  institution, 
  degree, 
  duration, 
  grade, 
  description 
}) => {
  return (
    <div className="education-card">
      <div className="timeline-dot"></div>
      <div className="card-content">
        <div className="institution-header">
          <div className="logo-container">
            <img src={logo} alt={institution} className="institution-logo" />
          </div>
          <div className="institution-info">
            <h3 className="institution-name">{institution}</h3>
            <p className="degree-name">{degree}</p>
            <p className="duration">{duration}</p>
          </div>
        </div>
        <div className="education-details">
          <p className="grade">Grade: {grade}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

