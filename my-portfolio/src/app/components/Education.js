"use client"
import { motion } from "framer-motion";
import styles from "../styles/education.module.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      institution: "Hemvati Nandan Bhauguna Garhwal University, Srinagar, Uttarakhand",
      year: "2022 - 2026",
      grade: "7 CGPA",
      description:
        "Specialized in Computer Science and Engineering .",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Intermediate (12th)",
      institution: "R.B.S. College, Teyai, Teghra, Begusarai, Bihar",
      year: "2020 - 2022",
      grade: "80%",
      description: "Science stream with PCMB subjects.",
      icon: "📚",
    },
    {
      id: 3,
      degree: "Matriculation (10th)",
      institution: "St. Paul Public School, Teghra, Begusarai, Bihar",
      year: "2020",
      grade: "79%",
      description: "I engaged in all the curricular activities and good in academic. ",
      icon: "🏫",
    },
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            My <span>Education</span>
          </h2>
          <p className={styles.subtitle}>Academic Journey</p>
          <div className={styles.divider}></div>
        </motion.div>

        {/* Education Timeline */}
        <div className={styles.timeline}>
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${styles.timelineItem} ${styles[`step${index + 1}`]}`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>{education.icon}</span>
                </div>
                <div className={styles.timelineDetails}>
                  <h3 className={styles.degree}>{education.degree}</h3>
                  <p className={styles.institution}>{education.institution}</p>
                  <div className={styles.meta}>
                    <span className={styles.year}>{education.year}</span>
                    <span className={styles.grade}>{education.grade}</span>
                  </div>
                  <p className={styles.description}>{education.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
