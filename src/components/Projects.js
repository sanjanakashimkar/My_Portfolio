import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import madhupremImage from "../assets/img/Madhuprem.png";
import sanjanaImage from "../assets/img/image.png";
import Ashish from "../assets/img/ashish mobile.png";
import ss from "../assets/img/ss computers.png";
import fortune from "../assets/img/fortune.png";
import durgesh from "../assets/img/Durgesh.png";
import cars from "../assets/img/cars.png";
import beacon from "../assets/img/beacon.png";
import shinde from "../assets/img/shinde.png";
import cheap from "../assets/img/cheap.png";

const projects = [

  {
    title: "Cars Nagpur",
    description: "Our car-selling website is a dedicated platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline the process of buying and selling second-hand cars. Designed exclusively for pre-owned vehicles, the website offers a user-friendly interface, robust search functionality, and detailed listings to help users find their ideal car with ease. Sellers can effortlessly list their vehicles, while buyers can explore a wide range of options, complete with transparent pricing and specifications. With a focus on reliability, efficiency, and innovation, our platform simplifies the second-hand car market, creating a seamless experience for both buyers and sellers.",
    image: cars,
    // date: "April 2024",
    tags: ["Mongodb", "Expressjx", "Reactjs", "Nodejs","Redux tool","Javascript "],
    githubUrl: "https://github.com/sanjanakashimkar",
    // liveUrl: "https://madhupremcaterers.in/",
    // members: [
    //   {
    //     name: "Sanjana Kashimkar",
    //     image: sanjanaImage,
    //     github: "https://github.com/sanjanakashimkar",
    //     linkedin: "www.linkedin.com/in/sanjana-kashimkar-11609424a"
    //   },
    //   {
    //     name: "Sharda Waghmare",
    //     image: "/images/member2.jpg",
    //     github: "https://github.com/pranav",
    //     linkedin: "https://www.linkedin.com/in/sharda-waghmare-805955218/"
    //   },
    //   {
    //     name: "Gaurav Mohadikar",
    //     image: "/images/member2.jpg",
    //     github: "https://github.com/pranav",
    //     linkedin: "https://linkedin.com/in/pranav"
    //   },
    //   {
    //     name: "Pranav Belorkar",
    //     image: "/images/member2.jpg",
    //     github: "https://github.com/pranav",
    //     linkedin: "https://linkedin.com/in/pranav"
    //   }
    // ]
  },
  {
    title: "Madhuprem Cateres",
    description: "At Madhuprem Caterers, we craft unforgettable culinary journeys that celebrate flavor and tradition. With an unwavering commitment to quality, we blend creativity with expertise to provide exceptional catering services for all your special occasions. From intimate gatherings to grand celebrations, we ensure every bite tells a story of taste, elegance, and care.",
    image: madhupremImage,
    // date: "April 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://madhupremcaterers.in/",
    // members: [
    //   {
    //     name: "Sanjana Kashimkar",
    //     image: sanjanaImage,
    //     github: "https://github.com/sanjanakashimkar",
    //     linkedin: "www.linkedin.com/in/sanjana-kashimkar-11609424a"
    //   },
    //   {
    //     name: "Muskan Burde",
    //     image: "/images/member2.jpg",
    //     github: "https://github.com/pranav",
    //     linkedin: "https://linkedin.com/in/pranav"
    //   }
    // ]
  },
  {
    title: "Ashish Mobile shop",
    description: "At Ashish Mobile Shop, we bring technology to your fingertips with a promise of quality and innovation. Dedicated to meeting your mobile needs, we offer a wide range of the latest smartphones, accessories, and expert services. Whether you're upgrading your device or seeking the perfect gadget, our passion for excellence ensures a seamless experience. Discover a world where technology meets trust, and every purchase tells a story of value, style, and satisfaction.",
    image: Ashish,
    // date: "April 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://ashishmobile.in/"
  },
  {
    title: "Fortune Mall",
    description: "This project features a well-designed website for Fortune Mall, a top shopping and entertainment destination. The website is easy to use and visually appealing, showcasing the mall's variety of shops, restaurants, and events. It helps visitors explore offers, plan visits, and stay updated on activities, making their experience smooth and enjoyable. The design combines style and simplicity, reflecting the vibrant and welcoming atmosphere of Fortune Mall.",
    image: fortune,
    // date: "May 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://fortunemallnagpur.in/"
  },
  {
    title: "SS Computers",
    description: "This project showcases a meticulously crafted website for SS Computer, a leading provider of technology solutions. The design reflects a modern, professional aesthetic while integrating user-friendly navigation and cutting-edge functionality. With a focus on showcasing products, services, and expertise, this website delivers a seamless digital experience tailored to tech enthusiasts, businesses, and professionals alike. It combines visual appeal with technical excellence to effectively represent the brand's commitment to innovation and customer satisfaction.",
    image: ss,
    // date: "May 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://sscomputernagpur.in/index.html"
  },
  {
    title: "Durgesh Furniture & Interior",
    description: "The website for Durgesh Furniture and Interior beautifully highlights custom furniture, creative interiors, and smooth, user-friendly design. It showcases their expertise in blending style and functionality, offering an engaging platform to explore premium craftsmanship and innovative interior solutions.",
    image: durgesh,
    // date: "May 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://durgeshfurniture.in/"
  },
  {
    title: "Beacon Academy Nagpur",
    description: "The website for Durgesh Furniture and Interior beautifully highlights custom furniture, creative interiors, and smooth, user-friendly design. It showcases their expertise in blending style and functionality, offering an engaging platform to explore premium craftsmanship and innovative interior solutions.",
    image: beacon,
    // date: "May 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://www.beaconacademynagpur.in/"
  },
  {
    title: "Shinde Education",
    description: "Shinde Education is a trusted institution committed to providing quality education and academic excellence. With a focus on nurturing young minds, we offer comprehensive coaching and guidance across various subjects and competitive exams. Our experienced faculty, innovative teaching methods, and student-centric approach ensure a strong foundation for academic success. At Shinde Education, we empower students to achieve their goals with confidence, knowledge, and dedication, fostering a brighter future for every learner",
    image: shinde,
    // date: "May 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://shindeseducationgallery.com/"
  },
  {
    title: "Cheap Book Depot",
    description: "Cheap Book Depot is your one-stop destination for affordable books across all genres. From academic textbooks to fiction, non-fiction, and competitive exam materials, we offer a wide range of quality books at unbeatable prices. With a mission to make knowledge accessible to everyone, we provide budget-friendly options for students, book enthusiasts, and lifelong learners. At Cheap Book Depot, we believe that great books shouldn’t come with a hefty price tag—explore, learn, and grow without breaking the bank.",
    image: cheap,
    // date: "May 2024",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sanjanakashimkar",
    liveUrl: "https://cheapbookdepot.com/"
  }
  
];

const filters = ["DEVELOPMENT PROJECTS"];

const ProjectsSection = () => {
  const [activeFilter] = useState("DEVELOPMENT PROJECTS");

  return (
    
    <section className="bg-zinc-900 py-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">Projects</h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full ${
                activeFilter === filter
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "bg-transparent text-white border border-zinc-700 hover:border-purple-500/50"
              } transition-colors`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

