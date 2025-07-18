"use client"; 

import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => handleLinkClick("")}
        >
          <span className={styles.logoText}>SURAJ&apos;s</span>
          <span className={styles.logoHighlight}>Portfolio</span>
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="#about"
            className={`${styles.navLink} ${
              activeLink === "about" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`${styles.navLink} ${
              activeLink === "skills" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`${styles.navLink} ${
              activeLink === "projects" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Link>

          <Link
            href="#educations"
            className={`${styles.navLink} ${
              activeLink === "educations" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("educations")}
          >
            Educations
          </Link>

          <Link
            href="#contact"
            className={`${styles.navLink} ${
              activeLink === "contact" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </div>

        <button
          className={`${styles.menuButton} ${
            mobileMenuOpen ? styles.open : ""
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>

        <div
          className={`${styles.mobileMenu} ${
            mobileMenuOpen ? styles.open : ""
          }`}
        >
          <Link
            href="#about"
            className={`${styles.mobileLink} ${
              activeLink === "about" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            href="#projects"
            className={`${styles.mobileLink} ${
              activeLink === "projects" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className={`${styles.mobileLink} ${
              activeLink === "skills" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className={`${styles.mobileLink} ${
              activeLink === "contact" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
