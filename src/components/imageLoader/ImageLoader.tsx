import React from "react";
import styles from "./ImageLoader.module.scss";
import DropZone from "@/components/imageLoader/DropZone";

const ImageLoader = ({ data, dispatch }: any) => (
  <div style={{ backgroundImage: "url(/moon.jpg)" }} className={styles.wrapper}>
    <div className={styles.loader}>
      <div className={styles.header}>Upload Your Photos</div>
      <p>
        Select up to 5 high quality images to upload into our database. If your
        image is selected, a member of our team will contact you for atribution.
      </p>
      <DropZone data={data} dispatch={dispatch} />
    </div>
  </div>
);

export default ImageLoader;
