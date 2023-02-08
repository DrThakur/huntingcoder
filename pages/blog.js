import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and display them
const Blog = () => {
  return (
    <div className={styles.blogs}>
      <main className={styles.main}>
        <div>
          <Link href={"/blogpost/learn-javascript"}>
            <h3 className={styles.blogItem3}>
              How to learn JavaScript in 2023 ?
            </h3>
          </Link>
          <p>JavaScript is a language used fo design logic for the web.</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2023 ?</h3>
          <p>JavaScript is a language used fo design logic for the web.</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2023 ?</h3>
          <p>JavaScript is a language used fo design logic for the web.</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2023 ?</h3>
          <p>JavaScript is a language used fo design logic for the web.</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
