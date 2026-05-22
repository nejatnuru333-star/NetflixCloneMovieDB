import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footerColumns = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="/" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="/" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="/" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="/" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksGrid}>
          {footerColumns.map((column, index) => (
            <ul key={index} className={styles.column}>
              {column.map((link) => (
                <li key={link}>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copy}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;