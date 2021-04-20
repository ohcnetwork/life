import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Life | Coronasafe network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-bold text-xl">Welcome to Life</h1>
      </main>

      <footer>
        <a
          href="http://coronasafe.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Coronasafe
        </a>
      </footer>
    </div>
  );
}
