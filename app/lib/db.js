import { sampleWishlists } from './sampleData';

// Simulate fetching wishlists for a user
export async function fetchUserWishlists(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const wishlists = sampleWishlists.filter((wishlist) => wishlist.userId === userId);
            resolve(wishlists);
        }, 500); // Simulate network delay
    });
}

// Simulate fetching a single wishlist by ID
export async function fetchWishlistById(userId, wishlistId) {
  return new Promise((resolve) => {
    setTimeout(() => {
        const wishlists = sampleWishlists.filter((wishlist) => wishlist.userId === userId) || [];
      const wishlist = wishlists.find(
        (wishlist) => wishlist.wishlistId === parseInt(wishlistId, 10)
      );
      resolve(wishlist || null);
    }, 500); // Simulate network delay
  });
}