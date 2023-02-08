import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

//Step 3: Find the file corresponding to the slug
//Step 4: Populate them inside the page
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia
          quis asperiores labore cupiditate cum commodi cumque. Beatae suscipit
          molestias tenetur molestiae ipsam.
        </div>
      </main>
    </div>
  );
};

export default Slug;
