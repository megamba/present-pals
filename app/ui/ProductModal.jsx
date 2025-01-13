import React, { useEffect, useRef } from 'react';
import styles from './ProductModal.module.css';

const ProductModal = ({ 
  isOpen, 
  onClose,
  product
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div 
      className={styles.modalOverlay}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        className={styles.modalBackdrop}
        onClick={onClose}
      />
      
      <div 
        ref={modalRef}
        className={styles.modalContainer}
        onClick={e => e.stopPropagation()}
        style={{
          maxHeight: 'calc(100vh - 160px)',
        }}
      >
        <div className={styles.modalContent}>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close modal"
          >
            x
          </button>

          <div className={styles.imageContainer}>
            {product.productImage ? (
              <img
                src={product.productImage}
                alt={product.productTitle}
                className={styles.image}
                loading="lazy"
              />
            ) : (
              <div className={styles.fallbackImage}>
                No image available
              </div>
            )}
          </div>

          <div className={styles.detailsContainer}>
            <h2 
              id="modal-title"
              className={styles.title}
            >
              {product.productTitle}
            </h2>

            <div className={styles.priceQuantityContainer}>
              <p className={styles.price}>
                ${product.productPrice}
              </p>
              <p className={styles.quantity}>
                Quantity: {product.productQuantity}
              </p>
            </div>

            {product.productDescription && (
              <p className={styles.description}>
                {product.productDescription}
              </p>
            )}

            <div className={styles.actionContainer}>
              {product.productPrimaryLink && (
                <a
                  href={product.productPrimaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View Product
                </a>
              )}

              {product.productFavorited && (
                <div className={styles.favoriteContainer}>
                  <span>★</span>
                  <span>Favorited</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;