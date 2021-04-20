import React from 'react';
import { useRouter } from 'next/router';

const Oxygen = ({ data }) => {
  const route = useRouter();
  const { state, district } = route.query;
  console.log(data);
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
    <OxygenCard name="Ashwin" company="Ashwin Oxygen" phone1={999998888} phone2={999999888} description="some long lomg lomg lomg lomg lomg string" source="google" slink="https://google.com" fstate="Tamil Nadu" fdistrict="Madurai" />
    <OxygenCard name="Ashwin" company="Ashwin Oxygen" phone1={999998888} phone2={999999888} description="some long lomg lomg lomg lomg lomg string" source="google" slink="https://google.com" fstate="Tamil Nadu" fdistrict="Madurai" />
    <OxygenCard name="Ashwin" company="Ashwin Oxygen" phone1={999998888} phone2={999999888} description="some long lomg lomg lomg lomg lomg string" source="google" slink="https://google.com" fstate="Tamil Nadu" fdistrict="Madurai" />
    </div>;
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
