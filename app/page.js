"use client"; // Add this directive at the top

import styles from "./page.module.css";
import { useState } from 'react';

// components
import CreateWishlistButton from "./ui/CreateWishlistButton";
import ListButton from "./ui/ListButton";
import NewWishlistSetupModal from "./ui/NewWishlistSetupModal";

export default function Home() {
  // will remove this once we have a backend
  const [sampleProductLists, setSampleProductLists] = useState([
    { listTitle: 'smell products', numProducts: 420, wishListDescription: 'for my smelly things' },
    { listTitle: 'Electronics', numProducts: 12, wishListDescription: 'cool things' },
    { listTitle: 'Clothing', numProducts: 8, wishListDescription: 'list of clothes I wnat' },
    { listTitle: 'Books', numProducts: 25, wishListDescription: 'list of books I want' },
  ]);
  const [showNewWishlistModal, setShowNewWishlistModal] = useState(true); 
  const openModal = () => setShowNewWishlistModal(true);
  const closeModal = () => setShowNewWishlistModal(false);
  const [newWishlistName, setNewWishlistName] = useState('');
  const [newWishListDescription, setNewWishListDescription] = useState('');

  const handleCreateWishlistClick = () => {
    openModal();
    // addProductList();
  };

  const handleAddWishlist = (e) => {
    // e.preventDefault(); // Prevent default form submission behavior
    if (newWishlistName.trim() === '') return; // Avoid adding empty names

    // Add the new wishlist to the state
    setSampleProductLists((prevLists) => [
        ...prevLists,
        { listTitle: newWishlistName, numProducts: 0, wishListDescription: newWishListDescription },
    ]);

    // Clear input and close the modal
    setNewWishlistName('');
    setNewWishListDescription('');
    closeModal();
};

  

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <NewWishlistSetupModal show={showNewWishlistModal} onClose={closeModal}>
          <h2>Create Wishlist</h2>
          <form onSubmit={handleAddWishlist} className={styles.newWishlistFormContainer}>
              <label>
                  Title:
                  <input
                      type="text"
                      value={newWishlistName}
                      onChange={(e) => setNewWishlistName(e.target.value)}
                      required
                  />
              </label>
              <label>
                  Description:
                  <input 
                    type="text"
                    value={newWishListDescription}
                    onChange={(e) => setNewWishListDescription(e.target.value)}
                  />
              </label>
              <button type="submit">Save</button>
          </form>
      </NewWishlistSetupModal>


        <div className={styles.profileContainer}>
          <img 
            src="./pingu-profile.png"
            className={styles.profileImageContainer}
          />
          <h3 className={styles.profileName}>Pingu Smel</h3>
        </div>

        <div className={styles.listButtonsContainer}>
          <CreateWishlistButton onClick={handleCreateWishlistClick}/>
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
