import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image
          src="/p1.jpeg"
          alt="post"
          layout="fill"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>02.02.2024 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/posts">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, at
          laborum fugiat totam ad quaerat repellat vel, sed voluptatum minima
          omnis enim distinctio numquam ipsum exercitationem labore non quo nam.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
