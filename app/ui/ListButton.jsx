"use client";
import { useRouter } from 'next/navigation';
import styles from './ListButton.module.css';

export default function ListButton({ wishlistId, listTitle, numProducts }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/wishlist/${wishlistId}`);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.listButton}
    >
      <div className={styles.listButtonContent}>
        <h3>{listTitle}</h3>
        <p>{numProducts} items</p>
      </div>
    </button>
  );
}