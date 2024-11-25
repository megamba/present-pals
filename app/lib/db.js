import { sampleProducts, sampleWishlists, userData } from './sampleData';

// Simulate getting user data given their userId
export async function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = userData.find((user) => user.userId === userId);
      resolve(user || null);
    }, 500); // Simulate network delay
  });
}

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
      const wishlist = wishlists.find((wishlist) => wishlist.wishlistId === wishlistId);
      resolve(wishlist || null);
    }, 500);
  });
}