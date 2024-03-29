import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Board from "@/container/Board";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe by IcEazy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}
