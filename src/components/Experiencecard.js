import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceCard.css';

const ExperienceCard = ({
  title,
  company,
  date,
  description,
  skills,
  logo
}) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <img src={logo} alt={`${company} logo`} className="company-logo" />
        <div className="card-title">
          <h3>{title}</h3>
          <p className="company-name">{company}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.string.isRequired,
};

export default ExperienceCard;

