import styles from './NewWishlistSetupModal.module.css'; // Optional for styling

export default function Modal({ show, onClose, children }) {
    if (!show) return null;

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}