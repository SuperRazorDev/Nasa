import React from "react";
import { IPhotosResponse } from "@/pages";
import styles from "./Galleries.module.scss";
import PlanetIcon from "@/assets/planet.svg";
import RightChevron from "@/assets/right.svg";
import { useHorizontalScroll } from "@/hooks";

const Galleries: React.FC<IPhotosResponse> = ({ photos }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <section className={styles.wrapper}>
      <div className={styles.mainPhotoContainer}>
        <div className={styles.breadcrumbs}>
          <span className={styles.breadcrumbsUpper}>Galleries · </span>
          <span className={styles.breadcrumbsCurrent}>Space Database</span>
        </div>
        <div
          className={styles.imageWrapper}
          style={{ backgroundImage: `url(/astronaut.jpg)` }}
        ></div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.rightContainerHeader}>
          <div className={styles.logoContainer}>
            <img src={PlanetIcon.src} />
          </div>
          <div className={styles.headerTextContainer}>
            <h4>NASA’s Space Database</h4>
            <span>Our Public Gallery for Outer Space</span>
          </div>
        </div>

        <p className={styles.rightContainerDescription}>
          We want to see space through your eyes! Take photos and upload them to
          our public library. Our goal is to provide the largest database of
          quality images. Space is amazing! Let’s capture it together!
        </p>

        <div className={styles.featuredImagesContainer}>
          <div className={styles.featuredImagesHeader}>
            <h4>Featured Images</h4>
            <span>Scroll to see more</span>
          </div>
          {photos.length ? (
            <div
              ref={scrollRef}
              className={styles.featuredImagesCarousel}
              style={{ gridTemplateColumns: `repeat(${photos.length}, 1fr)` }}
            >
              {photos.map((photo) => (
                <div className={styles.carouselDiv}>
                  <img
                    key={photo.id}
                    className={styles.carouselItem}
                    src={photo.img_src}
                    loading={"lazy"}
                  ></img>
                  <div>
                    Rover: {photo.rover.name}
                    <br />
                    Earth Date: {photo.earth_date}
                    <br />
                    Camera: {photo.camera.full_name}
                    <br />
                    Status: {photo.rover.status}
                    <br />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noImageText}>No images available</div>
          )}

          <div className={styles.featuredImagesFooter}>
            <div className={styles.viewGallery}>
              <span>View Gallery</span>
              <img src={RightChevron.src} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galleries;
