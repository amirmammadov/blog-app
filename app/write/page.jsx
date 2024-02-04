"use client";

import styles from "./write.module.css";

import { useState } from "react";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import "react-quill/dist/quill.bubble.css";

import ReactQuill from "react-quill";

const Write = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Title" />
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" style={{ display: "none" }} id="image" />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="image" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt="external"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="video" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Write;
