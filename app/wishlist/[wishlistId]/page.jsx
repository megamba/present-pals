"use client";
import { use, useEffect, useState } from 'react';
import { getUserId } from '@/app/lib/firebase';
import { fetchWishlistById } from '@/app/lib/db';
import styles from './wishlistpage.module.css';

export default function WishlistPage({ params }) {
  const reoslvedParams = use(params);
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = getUserId();

  useEffect(() => {
    console.log("WishlistPage: ", reoslvedParams.wishlistId)
    const loadWishlist = async () => {
      try {
        const wishlistData = await fetchWishlistById(userId, reoslvedParams.wishlistId);
        
        if (!wishlistData) {
          throw new Error('Wishlist not found');
        }

        // Verify user has access to this wishlist
        if (wishlistData.userId === userId) {
          setWishlist(wishlistData);
        } else {
          throw new Error('Unauthorized access');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, [reoslvedParams.wishlistId, userId]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>Error</h1>
        <p className={styles.errorMessage}>{error}</p>
        <button
          onClick={() => window.history.back()}
          className={styles.backButton}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{wishlist?.wishlistTitle}</h1>
          <button
            onClick={() => window.history.back()}
            className={styles.backButton}
          >
            Back to Home
          </button>
        </div>

        <div className={styles.wishlistCard}>
          <div className={styles.detailsSection}>
            <h2 className={styles.sectionTitle}>Wishlist Details</h2>
            <p className={styles.detailText}>Event Date: {wishlist?.wishlistEventDate}</p>
            <p className={styles.detailText}>Number of Items: {wishlist?.wishlistNumProducts}</p>
            <p className={styles.detailText}>Type: {wishlist?.wishlistType}</p>
            <p className={styles.detailText}>Recipient: {wishlist?.wishlistRecipient}</p>
          </div>

          <div className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Products</h2>
            {wishlist?.wishlistProductList?.length > 0 ? (
              <div className={styles.productsGrid}>
                {wishlist.wishlistProductList.map((product) => (
                  <div
                    key={product.productId}
                    className={styles.productCard}
                  >
                    {product.productImage && (
                      <img 
                        src={product.productImage} 
                        alt={product.productTitle}
                        className={styles.productImage}
                      />
                    )}
                    <h3 className={styles.productTitle}>{product.productTitle}</h3>
                    <p className={styles.productPrice}>${product.productPrice}</p>
                    {product.productDescription && (
                      <p className={styles.productDescription}>{product.productDescription}</p>
                    )}
                    {product.productPrimaryLink && (
                      <a
                        href={product.productPrimaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.productLink}
                      >
                        View Product
                      </a>
                    )}
                    <p className={styles.productQuantity}>Quantity: {product.productQuantity}</p>
                    {product.productFavorited && (
                      <span className={styles.favoriteTag}>★ Favorited</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.detailText}>No products added to this wishlist yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}