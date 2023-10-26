import styles from './page.module.css';
import { Post } from '@prisma/client';
import prisma from './services/db-service';

export default async function Home() {
  const posts: Post[] = await prisma.post.findMany();

  return <main className={styles.main}></main>;
}
