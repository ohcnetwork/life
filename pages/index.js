import Head from 'next/head';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Life | Coronasafe network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
}

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
