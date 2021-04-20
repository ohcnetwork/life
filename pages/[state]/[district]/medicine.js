import React from 'react';
import { useRouter } from 'next/router';

const Medicine = ({ data }) => {
  const route = useRouter();
  const { state, district } = route.query;
  console.log(data);
  return <div>Medicine Slug Route</div>;
};

export default Medicine;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/medicine');
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 1, // In seconds
  };
}
