import type { NextPage } from "next";
import Head from "next/head";
import Counter from "./components/Counter";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript Next.js App</title>
        <meta name="description" content="TypeScript Next.js example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.description}>
          <Counter initialValue={5} />
        </div>
      </main>
    </div>
  );
};

export default Home;