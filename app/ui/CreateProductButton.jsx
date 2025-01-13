import React from "react";
import styles from "./CreateProductButton.module.css";

export default function CreateProductButton({onClick}) {
    return(
        <div className={styles.createProductButtonContainer}>
            <button 
                className={styles.createProductButton}
                onClick={onClick}  
            >
                <div className={styles.plusIcon}><p>+</p></div>
                <div className={styles.buttonText}>Create Product</div>
            </button>
        </div>
    );
};