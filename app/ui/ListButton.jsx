import React from "react";
import Link from "next/link";
import styles from "./ListButton.module.css";

export default function ListButton({wishlistId, listTitle, numProducts}) {
    console.log('clicked for wishlistId ', wishlistId);
    return(
        <div className={styles.listButton}>
            <Link href={`/wishlists?id=${wishlistItem.wishlistId}`}>
                <div className={styles.listImage}></div>
                <p>{listTitle}</p>
                <p>{numProducts} products</p>
            </Link>
        </div>
    );
};