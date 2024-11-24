import React from "react";
import Link from "next/link";
import styles from "./ListButton.module.css";

export default function ListButton({wishlistId, listTitle, numProducts}) {
    console.log("wishlistID: ", wishlistId);
    return(
        <div className={styles.listButton}>
            <Link href={`/wishlist?id=${wishlistId}`}>
                <div className={styles.listImage}></div>
                <p>{listTitle}</p>
                <p>{numProducts} products</p>
            </Link>
        </div>
    );
};