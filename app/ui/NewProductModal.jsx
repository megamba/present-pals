"use client";
import { useState, useEffect } from "react";
import styles from "./NewProductModal.module.css";

export default function NewProductModal({ isOpen, onClose, onAddProduct }) {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [primaryLink, setPrimaryLink] = useState("");
  const [altLinks, setAltLinks] = useState([]);
  const [altLinkInput, setAltLinkInput] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Reset all input fields
  const resetForm = () => {
    setProductTitle("");
    setProductPrice("");
    setProductDescription("");
    setPrimaryLink("");
    setAltLinks([]);
    setAltLinkInput("");
    setImage(null);
    setQuantity(1);
  };

  const handleAddAltLink = () => {
    if (altLinkInput.trim()) {
      setAltLinks([...altLinks, altLinkInput.trim()]);
      setAltLinkInput("");
    }
  };

  const handleRemoveAltLink = (index) => {
    setAltLinks(altLinks.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      productTitle,
      productPrice: parseFloat(productPrice),
      productDescription,
      productPrimaryLink: primaryLink,
      productAltLinks: altLinks,
      productImage: image,
      productQuantity: quantity,
    };

    onAddProduct(newProduct); // Call the parent handler to add the product
    resetForm(); // Reset fields after adding a product
    onClose(); // Close the modal
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm(); // Reset fields whenever the modal is closed
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Add New Product</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Title
            <input
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            Price
            <input
              type="number"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            Description
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className={styles.textarea}
            />
          </label>

          <label className={styles.label}>
            Primary Reference Link
            <input
              type="url"
              value={primaryLink}
              onChange={(e) => setPrimaryLink(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Alternative Links
            <div className={styles.altLinksContainer}>
              <input
                type="url"
                value={altLinkInput}
                onChange={(e) => setAltLinkInput(e.target.value)}
                className={styles.input}
              />
              <button
                type="button"
                onClick={handleAddAltLink}
                className={styles.addLinkButton}
              >
                Add Link
              </button>
            </div>
            {altLinks.length > 0 && (
              <ul className={styles.altLinksList}>
                {altLinks.map((link, index) => (
                  <li key={index} className={styles.altLinkItem}>
                    {link}
                    <button
                      type="button"
                      onClick={() => handleRemoveAltLink(index)}
                      className={styles.removeLinkButton}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </label>

          <label className={styles.label}>
            Image Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.fileInput}
            />
            {image && (
              <div className={styles.imagePreview}>
                <img src={image} alt="Product Preview" />
              </div>
            )}
          </label>

          <label className={styles.label}>
            Quantity
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className={styles.input}
              min="1"
              required
            />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.submitButton}>
              Add Product
            </button>
            <button
              type="button"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
