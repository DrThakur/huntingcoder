import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and display them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // console.log("useEffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className={styles.blogs}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItem3}>{blogItem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogItem.content.substring(0, 140)}...
              </p>
            </div>
          );
        })}

        {/* <div className={styles.blogItem}>
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
        </div> */}
      </main>
    </div>
  );
};

export default Blog;
