"use client"; 
import styles from "./page.module.css";
import { useEffect, useState } from 'react'

// data models
import { Wishlist, Product } from "@/app/lib/models"
import { sampleProducts, sampleWishlists } from "@/app/lib/sampleData";
import { getUserId } from "./lib/firebase";
import { generateGUID } from "@/app/lib/generateGUID";

// components
import CreateWishlistButton from "./ui/CreateWishlistButton";
import ListButton from "./ui/ListButton";
import NewWishlistSetupModal from "./ui/NewWishlistSetupModal";

export default function Home() {
  const [sampleProductLists, setSampleProductLists] = useState(sampleWishlists);
  const [showNewWishlistModal, setShowNewWishlistModal] = useState(false); 
  const openModal = () => setShowNewWishlistModal(true);
  const closeModal = () => setShowNewWishlistModal(false);
  const [newWishlistName, setNewWishlistName] = useState('');
  const [newWishListDescription, setNewWishListDescription] = useState('');
  const userId = getUserId();

  // debugging
  useEffect(() => {
    console.log(sampleProductLists.length, " wishlists");
  }, [sampleProductLists]);

  const handleCreateWishlistClick = () => {
    openModal();
    // addProductList();
  };

  const handleAddWishlist = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (newWishlistName.trim() === '') return; // Avoid adding empty names


     // add a new Wishlist to the existing wishlist array
     const newWishlist = new Wishlist({
        wishlistId: `wishlist-${generateGUID()}`,
        wishlistTitle: newWishlistName,
        wishlistProductList: [], 
        wishlistNumProducts: 0, 
        wishlistType: "Wishlist", 
        wishlistEventDate: "2024-12-10", // TODO: set this via text input
        wishlistRecipient: userId, 
    });

    // Add the new wishlist to the state
    setSampleProductLists((prevLists) => [...prevLists, newWishlist]);
    
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
          {sampleProductLists
          .filter(list => list.userId === userId)
          .map((list, index) => (
              <ListButton
                  key={index}
                  wishlistId={list.wishlistId}
                  listTitle={list.wishlistTitle}
                  numProducts={list.wishlistNumProducts}
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
