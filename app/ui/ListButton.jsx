import React from "react";
import styles from "./ListButton.module.css";

export default function ListButton({listTitle, numProducts}) {
    return(
        <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>{listTitle}</p>
            <p>{numProducts} products</p>
        </div>
    );
};