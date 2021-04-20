import React from 'react';
import { useRouter } from 'next/router';

const Oxygen = ({ data }) => {
  const route = useRouter();
  const { state, district } = route.query;
  console.log(data);
  return <div>Oxygen Slug Route</div>;
};

export default Oxygen;

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: false
    }
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/oxygen');
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
