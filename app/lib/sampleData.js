import { Wishlist, Product } from "@/app/lib/models"
export const sampleProducts = [
    new Product({productId: `product-${generateGUID()}`, productTitle: "Product A",
     productPrice: 19.99, productDescription: "Description of Product A", 
     productQuantity: 1, productFavorited: true}),
     new Product({productId: `product-${generateGUID()}`, productTitle: "Product B",
     productPrice: 29.99, productDescription: "Description of Product B", 
     productQuantity: 2, productFavorited: false}),
    new Product({productId: `product-${generateGUID()}`, productTitle: "Product C",
     productPrice: 39.99, productDescription: "Description of Product C", 
     productQuantity: 7, productFavorited: false}),
];

export const sampleWishlists = [
    new Wishlist({userId: "user-1234567890", wishlistId: `wishlist-${generateGUID()}`, wishlistTitle: "Birthday Wishlist", 
      wishlistProductList: sampleProducts, wishlistNumProducts: sampleProducts.length, wishlistType: "Wishlist", wishlistEventDate: "2024-12-10", 
      wishlistRecipient: "Nathan"}),
    new Wishlist({userId: "user-12121212", wishlistId: `wishlist-${generateGUID()}`, wishlistTitle: "xxx", 
      wishlistProductList: sampleProducts, wishlistNumProducts: sampleProducts.length, wishlistType: "Wishlist", wishlistEventDate: "2025-05-15", 
      wishlistRecipient: "Michelle"}),
    new Wishlist({userId: "user-33415", wishlistId: `wishlist-${generateGUID()}`, wishlistTitle: "Self-help books", 
      wishlistProductList: sampleProducts, wishlistNumProducts: sampleProducts.length, wishlistType: "Wishlist", wishlistEventDate: "2024-11-30", 
      wishlistRecipient: "Jackie"}),
];

function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const random = Math.random() * 16 | 0;
      const value = c === 'x' ? random : (random & 0x3 | 0x8);
      return value.toString(16);
    });
  }