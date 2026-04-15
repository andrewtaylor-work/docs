import React from 'react';
import styles from './CardGrid.module.css';

export default function CardGrid({ cards }) {
  return (
    <div className={styles.grid}>
      {cards.map((card, i) => (
        <div key={i} className={styles.card}>
          <p className={styles.label}>{card.label}</p>
          <p className={styles.desc}>{card.desc}</p>
        </div>
      ))}
    </div>
  );
}