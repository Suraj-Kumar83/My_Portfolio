"use client"

// components/About.js
import React,{useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/about.module.css";
import Link from "next/link";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    
    setTimeout(() => {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 300);
  };
  
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.profileWrapper}
        >
          <div className={styles.glowEffect}></div>
          <div className={styles.profileImage}>
            <Image
              src="/profile.png"
              alt="Your Name"
              width={300}
              height={350}
              priority
            />
          </div>
          <div className={styles.nameTag}>
            <span className={styles.nameText}>Suraj Kumar</span>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.aboutText}
        >
          <h3 className={styles.subtitle}>
            Hello Everyone <span className={styles.wave}>👋</span>
          </h3>

          <div className={styles.description}>
            <p className={styles.paragraph}>
              Hi, I am <span className={styles.highlight}>Suraj Kumar</span>, a
              passionate{" "}
              <span className={styles.highlight}>MERN Stack Developer</span>{" "}
              with <span className={styles.highlight}>about 1 years</span> of
              experience.
            </p>

            <p className={styles.paragraph}>
              I specialize in creating responsive, accessible web applications
              that deliver exceptional user experiences across all devices.
              I also enthusiastic in problem solving. 
            </p>
          </div>

          {/* Skills - Made scrollable on mobile */}
          <div className={styles.skills}>
            <h4 className={styles.skillsTitle}>My Tech Stack</h4>
            <div className={styles.skillsContainer}>
              <div className={styles.skillsList}>
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "ExpressJS",
                  "Tailwind CSS",
                  "MongoDB",
                  "HTML5",
                  "CSS3",
                  "Git",
                  "REST APIs",
                ].map((tech) => (
                  <span key={tech} className={styles.skill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons - Stacked on mobile */}
          <div className={styles.buttons}>
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={styles.primaryBtn}
            >
              <svg
                className={`${styles.downloadIcon} ${
                  isDownloading ? styles.spin : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L7 11L8.41 9.59L12 13.17L15.59 9.59L17 11L12 16Z"
                  fill="currentColor"
                />
                <path d="M19 9H15V3H9V9H5L12 16L19 9Z" fill="currentColor" />
                <path d="M5 18V20H19V18H5Z" fill="currentColor" />
              </svg>
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
            <Link href="#contact" passHref legacyBehavior>
              <a className={styles.secondaryBtn}>Contact Me</a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
