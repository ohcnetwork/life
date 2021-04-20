import React from 'react';

const Medicine = ({ posts }) => {
  return (
    <div className='space-y-4'>
      {posts.map((p) => (
        <div className=' shadow bg-white p-4 flex'>
          <div>
            <span>{p.categories}</span>
            <span>
              {p.city} , {p.state}
            </span>
          </div>

          <span>{p.distributorName}</span>
          <span>{p.phoneNo1}</span>
          <span>{p.address}</span>
          <span>{p.description}</span>
          <span>{p.emailId}</span>
        </div>
      ))}
    </div>
  );
};

export default Medicine;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/medicine');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 1, // In seconds
  };
}
