import React from "react";
import styles from "./Footer.module.scss";
import WhitePlanetIcon from "@/assets/earth-white.svg";

const Footer = () => (
  <div className={styles.wrapper}>
    <div className={styles.leftWrapper}>
      <span>Contact Us</span>
      <span>About Us</span>
      <span>Privacy Policy</span>
      <span>Sitemap</span>
      <span>Terms & Conditions</span>
    </div>
    <div className={styles.rightWrapper}>
      <img src={WhitePlanetIcon.src} className={styles.whitePlanet} />
      <span>NASA</span>
    </div>
  </div>
);

export default Footer;
