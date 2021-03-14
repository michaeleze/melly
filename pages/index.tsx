import Layout from '../components/organism/layout';
import React from 'react';
import Section from "../components/organism/section";

export default function Index({ preview, src, header, text } : {preview: boolean, src: string, header: string, text: string}) {
  return (
      <Layout preview={preview}>
        <Section header={header} src={src} text={text}/>
      </Layout>
  );
};

export async function getStaticProps ({ preview = false }) {
  const api = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/home'
    : '/api/home';

  let data: {src: string, header: string, text: string};

  try{
    const res = await fetch(api);
    data = await res.json();
  }catch(e){
    throw new Error(e);
  }

  return {
    props: {
      src: data?.src,
      text: data?.text,
      header: data?.header,
    },
  }
}
