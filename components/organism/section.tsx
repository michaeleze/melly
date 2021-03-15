import styles from "../../styles/section-styles.module.css";
import React from "react";

const Section = ({header, src, text}) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img alt='michaeleze' className={styles.img} src={src} />
      </div>
      <div className={styles.headContainer}>
        <h1 className={styles.head}>{header}</h1>
        <p className={styles.subText}>{text}</p>
      </div>
    </section>
  )
}

export default Section;
