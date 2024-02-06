import React from "react";

import styles from "./featured.module.css";

import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Step into a world</b> where words weave wonders.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="post"
            layout="fill"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Baku Unveiled: Exploring the Heart of Azerbaijan
          </h1>
          <p className={styles.postDesc}>
            Dive into the vibrant streets and rich history of Baku, the jewel of
            Azerbaijan. From ancient palaces to modern marvels, uncover the
            {"city's"} secrets and immerse yourself in its diverse culture
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
