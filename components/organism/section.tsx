import styles from "../../styles/section-styles.module.css";
import React from "react";

const Section = ({header, src, text}) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img alt='michaeleze' className={styles.img} src={src} />
      </div>
      <div className={styles.headContainer}>
        <p className={styles.subText}>{text}</p>
        <h1 className={styles.head}>{header}</h1>
      </div>
    </section>
  )
}

export default Section;
