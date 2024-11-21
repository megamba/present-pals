"use client"; // Add this directive at the top

import styles from "./page.module.css";
import { useState } from 'react';

// components
import ListButton from "./ui/ListButton";

export default function Home() {
  const [sampleProductLists, setSampleProductLists] = useState([
    { listTitle: 'smell products', numProducts: 420 },
    { listTitle: 'Electronics', numProducts: 12 },
    { listTitle: 'Clothing', numProducts: 8 },
    { listTitle: 'Books', numProducts: 25 },
  ]);

  // Function to add a new product list
  const addProductList = () => {
    const newList = { listTitle: 'New List', numProducts: 0 };
    setSampleProductLists([...sampleProductLists, newList]);
};

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profileContainer}>
          <img 
            src="./pingu-profile.png"
            className={styles.profileImageContainer}
          />
          <h3 className={styles.profileName}>Pingu Smel</h3>
        </div>

        <div className={styles.listButtonsContainer}>
          <div className={styles.createWishlistButtonContainer}>
            <button 
              className={styles.createWishlistButton}
              onClick={addProductList}  
            >
              <span>+</span>
              <span>Create Wishlist</span>
            </button>
          </div>
          {sampleProductLists.map((list, index) => (
              <ListButton
                  key={index}
                  listTitle={list.listTitle}
                  numProducts={list.numProducts}
              />
          ))}
        </div>
        
      </main>
      <footer className={styles.footer}>
        <p>Created by the decepticon team</p>
        <div className={styles.footerLinkContainer}>
          <a href="https://github.com/megamba?tab=repositories">Michelle</a>
          <a href="https://github.com/naterg2000?tab=repositories">Nathan</a>
        </div>
      </footer>
    </div>
  );
}
