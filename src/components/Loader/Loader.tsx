import { FC } from 'react'
import styles from './Loader.module.scss'


export const Loader:FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.loader}></div>
    </section>
  );
};
