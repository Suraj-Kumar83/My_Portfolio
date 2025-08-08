"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wanderlust (Airbnb Clone)",
      description:
        "Conceptualized a comprehensive full-stack rental property platform using MongoDB, Express.js, Node.js , and frontend with HTML, CSS and JS.",
      tags: ["HTML", "CSS", "JS", "Node.js", "MongoDB", "ExpressJs"],
      github: "https://github.com/Suraj-Kumar83/Airbnb_Clone",
      deploy: "https://airbnb-clone-1zj0.onrender.com/listings",
      image: "/airbnb.png",
    },
    {
      id: 2,
      title: "Realtime Video & Chat App",
      description:
        "The Video Conferencing Web App is a real-time communication platform designed to enable users to conduct face-to-face meetings and exchange messages online.",
      tags: ["React.js", "Tailwind CSS", "MongoDB", "Socket.IO", "Node.js"],
      github: "https://github.com/Suraj-Kumar83/VideoConferencingZoomClone",
      deploy: "https://videoconferencingzoomclonefrontend.onrender.com",
      image: "/videoconference.png",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality and real-time updates.",
      tags: ["React", "Material UI"],
      github: "https://github.com/Suraj-Kumar83/Todo_App_React",
      image: "/Todo.png",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with location detection and analyse the weather data.",
      tags: ["JavaScript", "API", "CSS3"],
      github: "https://github.com/Suraj-Kumar83/Weather_App",
      image: "/weather.png",
    },

    {
      id: 5,
      title: "AYUSH Startup Registration Portal",
      description:
        "This platform is designed to streamline the startup registration process in the AYUSH sector, helping innovators and entrepreneurs connect with government schemes, submit proposals, and get started faster.",
      tags: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "GridFS",
        "Google Auth",
        "Nodemailer",
      ],
      github: "https://github.com/Suraj-Kumar83/Ayush_Startup",
      deploy: "https://ayush-startup-frontend.vercel.app/",
      image: "/ayushStartup.png",
    },
    {
      id: 6,
      title: "Technology and Pre-Incubation Cell Website-TPIC",
      description:
        "Enhanced the TPIC E-Cell website with Supabase backend, admin authentication, dynamic updates, multi-year data viewing, and responsive UI—serving ~100 users weekly.",
      tags: [
        "React.js",
        "Node.js",
        "Express",
        "Supabase",
        "Nodemailer",
      ],
      github: "https://github.com/Suraj-Kumar83/TpicEcell",
      deploy: "https://www.tpic.co.in/",
      image: "/TPIC.png",
    },

      {
      id: 7,
      title: "Dr.Ambedkar Excellence Centre Website-DACE",
      description:
        "Developed a real-time website for the DACE (Dr. Ambedkar Centre of Excellence) department at HNB Garhwal University, providing complete information and enhancing its digital presence",
      tags: [
        "Next.js",
      ],
      github: "https://github.com/Suraj-Kumar83/DACE-Profile",
      deploy: "https://hnbgu-dace.vercel.app/",
      image: "/DACE.png",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            My <span>Projects</span>
          </h2>
          <p className={styles.subtitle}>Some of my recent work</p>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={styles.projectCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>

                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deployLink}
                  >
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
