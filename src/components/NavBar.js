import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Sanjana_Kashimkar.png_facebook-removebg-preview.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => { onUpdateActiveLink('home'); scrollToSection('home'); }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => { onUpdateActiveLink('skills'); scrollToSection('skills'); }}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#education" 
              className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => { onUpdateActiveLink('education'); scrollToSection('education'); }}
            >
              Education
            </Nav.Link>
            <Nav.Link 
              href="#experience" 
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => { onUpdateActiveLink('experience'); scrollToSection('experience'); }}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => { onUpdateActiveLink('projects'); scrollToSection('projects'); }}
            >
              Projects
            </Nav.Link>

            <Nav.Link 
              href="#contact" 
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => { onUpdateActiveLink('contact'); scrollToSection('contact'); }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sanjana-kashimkar-11609424a" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <a href='https://github.com/sanjanakashimkar?tab=repositories' target="_blank" rel="noopener noreferrer">
              <button className="vvd"><span>Connect on Github</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

