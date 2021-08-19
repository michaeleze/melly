import React from 'react';
import HomeComponent, { Contentprops, HomeComponentProps } from "../components/organism/HomeComponent";

export default function Index({ preview, content }: { preview: boolean, content: Contentprops[] }) {
  return <HomeComponent content={content} />;
};

export async function getStaticProps({ preview = false }) {
  const api = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/home'
    : '/api/home';

  let data: HomeComponentProps;

  try {
    const res = await fetch(api);
    data = await res.json();
  } catch (e) {
    throw new Error(e);
  }

  return {
    props: data,
  }
}
