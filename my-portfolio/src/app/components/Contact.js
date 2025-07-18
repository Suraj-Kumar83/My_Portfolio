"use client"

import { motion } from "framer-motion";
import styles from "../styles/contact.module.css";
import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
        const form = useRef();
        const [isSending, setIsSending] = useState(false);
      
        const sendEmail = (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log("Form Data:", Object.fromEntries(formData)); 
          setIsSending(true);
      
          emailjs
            .sendForm(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
              e.target,
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then((result) => {
              alert("Message sent successfully!");
              form.current.reset();
            })
            .catch((error) => {
              alert("Failed to send message: " + error.text);
            })
            .finally(() => {
              setIsSending(false);
            });
        };
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "surajsingh66012@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+91 8340271489",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/suraj-kumar",
      link: "https://www.linkedin.com/in/suraj-kumar-6727252bb/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      value: "github.com/Suraj-Kumar83",
      link: "https://github.com/Suraj-Kumar83",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 7v13h-16v-13h16zm2-2h-20v17h20v-17zm-10 8h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-3h2v3zm0-4h-2v-1h2v1z" />
        </svg>
      ),
      title: "LeetCode",
      value: "leetcode.com/Suraj-Kumar_78",
      link: "https://leetcode.com/u/Suraj-Kumar_78/",
    },
    {
      icon: (
        <img
          src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
          alt="GeeksforGeeks"
          width={32}
          height={32}
        />
      ),
      title: "GeeksforGeeks",
      value: "geeksforgeeks.org/surajsinkyh6",
      link: "https://www.geeksforgeeks.org/user/surajsinkyh6/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      value: "Samartha, Kalyanpur, Bibhutipur, Samastipur, Bihar, 848160",
      link: "https://www.google.com/maps/@25.7066871,85.9232674,18z?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Get In <span>Touch</span>
          </h2>
          <p className={styles.subtitle}>Let us connect and collaborate</p>
          <div className={styles.divider}></div>
        </motion.div>

        {/* Contact Grid */}
        <div className={styles.contactGrid}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={styles.contactCard}
            >
              <div className={styles.iconContainer}>{method.icon}</div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>{method.title}</h3>
                <p className={styles.contactValue}>{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.contactForm}
          ref={form}
          onSubmit={sendEmail}
        >
          <h3 className={styles.formTitle}>Send Me a Message</h3>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name" // 👈 REQUIRED for EmailJS
              placeholder="Your Name"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email" // 👈 REQUIRED for EmailJS
              placeholder="Your Email"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message" // 👈 REQUIRED for EmailJS
              placeholder="Your Message"
              rows="5"
              className={styles.formTextarea}
              required
            ></textarea>
          </div>
          <button className={styles.submitButton} type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
