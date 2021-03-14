import Layout from '../components/organism/layout';
import styles from '../styles/home-styles.module.css';
import React from 'react';

export default function Index({ preview, src, header }) {
  return (
      <Layout preview={preview}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={src} />
          </div>
          <div className={styles.headContainer}>
            <h1 className={styles.head}>{header}</h1>
          </div>
        </div>
      </Layout>
  );
};

export async function getStaticProps ({ preview = false }) {
  const api = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/home'
    : '/api/home';

  let data: {src: string, header: string};

  try{
    const res = await fetch(api);
    data = await res.json();
  }catch(e){
    throw new Error(e);
  }

  return {
    props: {
      src: data?.src,
      header: data?.header,
    },
  }
}
