"use client"; 
import styles from "./page.module.css";
import { useEffect, useState } from 'react'

// data models
import { Wishlist, Product } from "@/app/lib/models"
import { sampleProducts, sampleWishlists } from "@/app/lib/sampleData";
import { getUserId } from "./lib/firebase";
import generateGUID from "@/app/lib/generateGUID";
import { addWishlist, fetchUserWishlists } from "@/app/lib/db";

// components
import CreateWishlistButton from "./ui/CreateWishlistButton";
import ListButton from "./ui/ListButton";
import NewWishlistSetupModal from "./ui/NewWishlistSetupModal";

export default function Home() {
  // const [sampleProductLists, setSampleProductLists] = useState(sampleWishlists);
  const [sampleProductLists, setSampleProductLists] = useState([]);
  const [showNewWishlistModal, setShowNewWishlistModal] = useState(false); 
  const openModal = () => setShowNewWishlistModal(true);
  const closeModal = () => setShowNewWishlistModal(false);
  const [newWishlistName, setNewWishlistName] = useState('');
  const [newWishListDescription, setNewWishListDescription] = useState('');
  const userId = getUserId();
  const [wishlists, setWishlists] = useState([]);

  console.log("userId", userId);

  // debugging
  useEffect(() => {
    console.log(sampleProductLists.length, " wishlists");
  }, [sampleProductLists]);

  // run when userId is fetched
  useEffect(() => {
    async function fetchWishlists() {
      const userWishlists = await fetchUserWishlists(userId);
      setWishlists(userWishlists);
    }
    fetchWishlists();
  }, [userId]);

  // Fetch wishlists on component mount
  useEffect(() => {
    async function fetchWishlists() {
      const userWishlists = await fetchUserWishlists(userId);
      setWishlists(userWishlists);
    }
    fetchWishlists();
  }, []);

  const handleCreateWishlistClick = () => {
    openModal();
    // addProductList();
  };

  // const handleAddWishlist = (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   if (newWishlistName.trim() === '') return; // Avoid adding empty names

  //   console.log("running handleAddWishlist()")


  //    // add a new Wishlist to the existing wishlist array
  //    const newWishlist = new Wishlist({
  //       userId: userId,
  //       wishlistId: `wishlist-${generateGUID}`,
  //       wishlistTitle: newWishlistName,
  //       wishlistProductList: [], 
  //       wishlistNumProducts: 0, 
  //       wishlistType: "Wishlist", 
  //       wishlistEventDate: "2024-12-10", // TODO: set this via text input
  //       wishlistRecipient: userId, 
  //   });
  //   console.log("new wishlist data", newWishlist);

  //   // Add the new wishlist to the state
  //   // setSampleProductLists((prevLists) => [...prevLists, newWishlist]);

  //   addWishlist(userId, newWishlist)
    
  //   // Clear input and close the modal
  //   setNewWishlistName('');
  //   setNewWishListDescription('');
  //   closeModal();
  // };

  const handleAddWishlist = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    if (newWishlistName.trim() === '') return; // Avoid adding empty names
  
    console.log("running handleAddWishlist()");
  
    // Create a new Wishlist object
    const newWishlist = {
      userId: userId,
      wishlistId: `wishlist-${generateGUID()}`, // Assuming generateGUID() is a function
      wishlistTitle: newWishlistName,
      wishlistProductList: [],
      wishlistNumProducts: 0,
      wishlistType: "Wishlist",
      wishlistEventDate: "2024-12-10", // TODO: Make this dynamic
      wishlistRecipient: userId,
    };
  
    console.log("New wishlist data:", newWishlist);
  
    try {
      // Call the addWishlist function and update the state
      const addedWishlist = await addWishlist(userId, newWishlist);
      setWishlists((prevWishlists) => [...prevWishlists, addedWishlist]);
      console.log("Wishlist successfully added:", addedWishlist);
  
      // Clear input and close the modal
      setNewWishlistName('');
      setNewWishListDescription('');
      closeModal();
    } catch (error) {
      console.error("Error adding wishlist:", error);
    }
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
        
        {/* display wihslist buttons */}
        {/* TODO: combine new wishlist button with wishlist button list */}
        <div>
          <h3 className={styles.listTitle}>Wishlists</h3>
          <div className={styles.listButtonsContainer}>
            {wishlists.map((list, index) => (
              <ListButton
                key={index}
                wishlistId={list.wishlistId}
                listTitle={list.wishlistTitle}
                numProducts={list.wishlistNumProducts}
              />
            ))}
          </div>
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
