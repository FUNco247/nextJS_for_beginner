import styles from "../styles/Home.module.css";
import Seo from "./components/seo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo title="introduce" />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://nextjs.org">Next.js!</a> Lesson note
        </h1>

        <p className={styles.description}>
          This is HOME from <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs/advanced-features/custom-document"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <a href="/movie" className={styles.card}>
            <h2>My Practice &rarr;</h2>
            <p>Movie information app</p>
          </a>
        </div>
      </main>
    </div>
  );
}
