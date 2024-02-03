"use client";

import Link from "next/link";
import styles from "./comment.module.css";
import Image from "next/image";

const Comment = () => {
  const status = "auth";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "auth" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
            blanditiis?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={status.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
            blanditiis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
