import React from "react";
import styles from "./ListButton.module.css";

export default function ListButton({listTitle, numProducts}) {
    return(
        <div className={styles.listButton}>
            <div className={styles.listImage}></div>
            <p>stinky gifts</p>
            <p>2 products</p>
        </div>
    );
};