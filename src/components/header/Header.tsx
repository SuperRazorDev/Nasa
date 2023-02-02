import React, { useState } from "react";
import styles from "./Header.module.scss";
import EarthIcon from "@/assets/earth.svg";
import SearchIcon from "@/assets/search.svg";
import ShareIcon from "@/assets/share.svg";
import BurgerIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg";

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  return (
    <div className={styles.contentWrapper}>
      <section className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <img src={EarthIcon.src} />
          <span className={styles.nasaLabel}>NASA</span>
        </div>

        <div className={styles.navigation}>
          <span>Missions</span>
          <span>Galleries</span>
          <span>NASA Audiences</span>
          <span>Downloads</span>
          <span>NASA TV</span>
          <span>About</span>
        </div>

        <div className={styles.actionsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={SearchIcon.src} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={ShareIcon.src} />
          </div>
          <div
            className={styles.iconWrapper}
            onClick={() => setIsBurgerOpened(true)}
          >
            <img src={BurgerIcon.src} />
          </div>

          {isBurgerOpened && (
            <div className={styles.burgerMenu}>
              <div className={styles.burgerHead}>
                <div
                  className={styles.closeIconWrapper}
                  onClick={() => setIsBurgerOpened(false)}
                >
                  <img src={CloseIcon.src} />
                </div>
              </div>
              <span>Humans in space</span>
              <span>Moon to Mars</span>
              <span>Earth</span>
              <span>Space Tech</span>
              <span>Solar System & Beyond</span>
              <span>STEM Engagement</span>
              <span>History</span>
              <span>Benefits to You</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Header;
