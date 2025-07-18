"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/skills.module.css";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const skills = [
    { name: "HTML5", img: "/skills/html.png", category: "frontend" },
    { name: "CSS3", img: "/skills/css.png", category: "frontend" },
    { name: "JavaScript", img: "/skills/js.png", category: "frontend" },
    { name: "React", img: "/skills/react.png", category: "frontend" },
    { name: "Next.js", img: "/skills/next.svg", category: "frontend" },
    { name: "Node.js", img: "/skills/nodejs.png", category: "backend" },
    { name: "Express", img: "/skills/express.png", category: "backend" },
    { name: "MongoDB", img: "/skills/mongodb.png", category: "backend" },
    { name: "C", img: "/skills/C.png", category: "others" },
    { name: "Git", img: "/skills/git.png", category: "tools" },
    { name: "C++", img: "/skills/cplusplus.png", category: "others" },
    { name: "Tailwind", img: "/skills/tailwind.png", category: "frontend" },
  ];

  const categories = ["all", "frontend", "backend", "tools","others"];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            My <span>Skills</span>
          </h2>
          <p className={styles.subtitle}>Technologies I work with</p>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`${styles.filterBtn} ${
                activeFilter === category ? styles.active : ""
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={styles.card}
            >
              <div className={styles.imgContainer}>
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className={styles.img}
                />
              </div>
              <h3 className={styles.name}>{skill.name}</h3>
              <span className={`${styles.tag} ${styles[skill.category]}`}>
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
