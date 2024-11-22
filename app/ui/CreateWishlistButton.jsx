import React from "react";
import styles from "./CreateWishlistButton.module.css";

export default function CreateWishlistButton({onClick}) {
    return(
        <div className={styles.createWishlistButtonContainer}>
            <button 
                className={styles.createWishlistButton}
                onClick={onClick}  
            >
                <div className={styles.plusIcon}><p>+</p></div>
                <div className={styles.buttonText}>Create Wishlist</div>
            </button>
        </div>
    );
};