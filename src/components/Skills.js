'use client';

import React, { useState, useEffect } from 'react';
import { MonitorIcon, ServerIcon, WrenchIcon, UsersIcon } from 'lucide-react';
import headerImg from "../assets/img/color-sharp2.png";

const skillCategories = {
  frontend: [
    { name: 'Reactjs', percentage: 75 },
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 90 },
    { name: 'Javascript', percentage: 70 },
    { name: 'Bootstrap', percentage: 85 },
  ],
  backend: [
    { name: 'Node.js', percentage: 75 },
    { name: 'Express.js', percentage: 75 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'MySQL', percentage: 70 },
  ],
  tools: [
    { name: 'Git & GitHub', percentage: 90 },
    { name: 'Visual Studio Code', percentage: 95 },
    { name: 'Canva', percentage: 90 },
    { name: 'Responsive Design', percentage: 70 },
  ],
  softSkills: [
    { name: 'Communication', percentage: 90 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Problem Solving', percentage: 80 },
    { name: 'Adaptability', percentage: 75 },
  ],
};

export default function TechnicalProficiency() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      className={isVisible ? "animate__animated animate__zoomIn" : ""}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">Technical Proficiency</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard
            title="Frontend"
            icon={<MonitorIcon className="w-6 h-6" />}
            isActive={activeCategory === 'frontend'}
            onClick={() => setActiveCategory('frontend')}
          />
          <CategoryCard
            title="Backend"
            icon={<ServerIcon className="w-6 h-6" />}
            isActive={activeCategory === 'backend'}
            onClick={() => setActiveCategory('backend')}
          />
          <CategoryCard
            title="Tools"
            icon={<WrenchIcon className="w-6 h-6" />}
            isActive={activeCategory === 'tools'}
            onClick={() => setActiveCategory('tools')}
          />
          <CategoryCard
            title="Soft Skills"
            icon={<UsersIcon className="w-6 h-6" />}
            isActive={activeCategory === 'softSkills'}
            onClick={() => setActiveCategory('softSkills')}
          />
        </div>

        <div className="mt-6">
          <SkillsCard category={activeCategory} skills={skillCategories[activeCategory]} />
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ title, icon, isActive, onClick }) {
  return (
    <div
      className={`
        relative p-6 rounded-lg cursor-pointer transition-all duration-300
        ${isActive 
          ? 'bg-[#2a1c3d] shadow-[0_0_20px_rgba(147,51,234,0.1)] border border-purple-500/30' 
          : 'bg-[#1a1025]/50 border border-purple-500/10 hover:border-purple-500/20'}
      `}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className={`
          p-2 rounded-lg transition-colors duration-300
          ${isActive ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-500/10 text-purple-400/60'}
        `}>
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

function SkillsCard({ category, skills }) {
  return (
    <div className="bg-[#2a1c3d] rounded-lg p-6 shadow-[0_0_20px_rgba(147,51,234,0.1)] border border-purple-500/30">
      <h3 className="text-2xl font-semibold text-white mb-6">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
}

function SkillProgress({ name, percentage }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-200">{name}</span>
        <span className="text-sm text-purple-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-[#1a1025] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
