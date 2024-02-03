import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comment from "@/components/comments/Comment";

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
            deserunt.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="blog"
                layout="fill"
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.02.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt="blog"
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              similique temporibus ea, maiores magni iure placeat deserunt sed
              nulla necessitatibus harum enim debitis, optio dolorem nam nihil
              vitae molestiae unde?
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
