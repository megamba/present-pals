"use client"; // Add this directive at the top

import styles from "./page.module.css";
import { useEffect, useState } from 'react'

// data models
import { Wishlist, Product } from "@/app/lib/models"

// components
import CreateWishlistButton from "./ui/CreateWishlistButton";
import ListButton from "./ui/ListButton";
import NewWishlistSetupModal from "./ui/NewWishlistSetupModal";

export default function Home() {
  // will remove this once we have a backend
  const sampleProducts = [
    new Product({productId: `product-${generateGUID()}`, productTitle: "Product A",
     productPrice: 19.99, productDescription: "Description of Product A", 
     productQuantity: 1, productFavorited: true}),
     new Product({productId: `product-${generateGUID()}`, productTitle: "Product B",
     productPrice: 29.99, productDescription: "Description of Product B", 
     productQuantity: 2, productFavorited: false}),
    new Product({productId: `product-${generateGUID()}`, productTitle: "Product C",
     productPrice: 39.99, productDescription: "Description of Product C", 
     productQuantity: 7, productFavorited: false}),
  ];

  const sampleWishlists = [
    new Wishlist({wishlistId: `wishlist-${generateGUID()}`, wishlistTitle: "Birthday Wishlist", 
      wishlistProductList: sampleProducts, wishlistNumProducts: sampleProducts.length, wishlistType: "Wishlist", wishlistEventDate: "2024-12-10", 
      wishlistRecipient: "Nathan"}),
    new Wishlist({wishlistId: `wishlist-${generateGUID()}`, wishlistTitle: "xxx", 
      wishlistProductList: sampleProducts, wishlistNumProducts: sampleProducts.length, wishlistType: "Wishlist", wishlistEventDate: "2025-05-15", 
      wishlistRecipient: "Michelle"}),
    new Wishlist({wishlistId: `wishlist-${generateGUID()}`, wishlistTitle: "Self-help books", 
      wishlistProductList: sampleProducts, wishlistNumProducts: sampleProducts.length, wishlistType: "Wishlist", wishlistEventDate: "2024-11-30", 
      wishlistRecipient: "Jackie"}),
  ];
  const [sampleProductLists, setSampleProductLists] = useState(sampleWishlists);
  const [showNewWishlistModal, setShowNewWishlistModal] = useState(false); 
  const openModal = () => setShowNewWishlistModal(true);
  const closeModal = () => setShowNewWishlistModal(false);
  const [newWishlistName, setNewWishlistName] = useState('');
  const [newWishListDescription, setNewWishListDescription] = useState('');

  // debugging
  useEffect(() => {
    console.log(sampleProductLists.length, " wishlists");
  }, [sampleProductLists]);

  const handleCreateWishlistClick = () => {
    openModal();
    // addProductList();
  };

  // get a GUID for the wishlist ID
  function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const random = Math.random() * 16 | 0;
      const value = c === 'x' ? random : (random & 0x3 | 0x8);
      return value.toString(16);
    });
  }

  const handleAddWishlist = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (newWishlistName.trim() === '') return; // Avoid adding empty names


     // add a new Wishlist to the existing wishlist array
     const newWishlist = new Wishlist({
        wishlistId: `wishlist-${generateGUID()}`,
        wishlistTitle: newWishlistName,
        wishlistProductList: sampleProducts, 
        wishlistNumProducts: sampleProducts.length, 
        wishlistType: "Wishlist", 
        wishlistEventDate: "2024-12-10", 
        wishlistRecipient: "Nathan", 
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
          {sampleProductLists.map((list, index) => (
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
