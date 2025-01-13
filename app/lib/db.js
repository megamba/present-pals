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
  console.log('getting ', userId, ' wishlists')
    return new Promise((resolve) => {
        setTimeout(() => {
            const wishlists = sampleWishlists.filter((wishlist) => wishlist.userId === userId);
            console.log('wishlists: ', wishlists)
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


export async function addWishlist(userId, wishlistData) {
  console.log("Adding wishlist to sampleWishlists: ", wishlistData);
  return new Promise((resolve) => {
    setTimeout(() => {
      sampleWishlists.push(wishlistData);
      console.log("Wishlist added to sampleWishlists: ", sampleWishlists);
      resolve(wishlistData || null);
    }, 500);
  });
}


export async function createNewProduct(userId, wishlistId, productData) {
  console.log("Adding product to : ", wishlistId);
  console.log('New product data: ', productData);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Product added to Products DB");
      resolve(wishlistData || null);
    }, 500);
  });
}