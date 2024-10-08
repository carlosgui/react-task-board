import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png"
import styles from "../../styles/home.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma facil</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image 
            className={styles.hero}
            src={heroImg}
            alt="Logo Tarefas"
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br /> seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+90 comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}
