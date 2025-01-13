import { Product, Wishlist, User } from "@/app/lib/models";
import generateGUID from "./generateGUID";

export const sampleProducts = {
  "productA": new Product({productId: `product-${generateGUID()}`, productTitle: "Product A",
       productPrice: 19.99, productDescription: "Description of Product A", 
       productQuantity: 1, productFavorited: true, productImage: 'https://cannonkeys.com/cdn/shop/products/CK052722-413.jpg?v=1687201374&width=5000'}),
  "productB": new Product({productId: `product-${generateGUID()}`, productTitle: "Product B",
       productPrice: 29.99, productDescription: "Description of Product B", 
       productQuantity: 2, productFavorited: false}),
  "productC": new Product({productId: `product-${generateGUID()}`, productTitle: "Product C",
       productPrice: 39.99, productDescription: "Description of Product C",
       productQuantity: 7, productFavorited: false}),
};

export let sampleWishlists = [
    new Wishlist({userId: "user-1234567890", wishlistId: "wishlist-guid1", wishlistTitle: "Birthday Wishlist", 
      wishlistProductList: [sampleProducts["productA"], sampleProducts["productB"]], wishlistNumProducts: sampleProducts.length,
      wishlistType: "Wishlist", wishlistEventDate: "2024-12-10", wishlistRecipient: "user-1234567890"}),
    new Wishlist({userId: "user-1234567890", wishlistId: "wishlist-guid4", wishlistTitle: "Other Wishlist", 
        wishlistProductList: [sampleProducts["productA"]], wishlistNumProducts: sampleProducts.length,
        wishlistType: "Wishlist", wishlistEventDate: "2024-12-10", wishlistRecipient: "user-1234567890"}),
    new Wishlist({userId: "user-12121212", wishlistId: "wishlist-guid2", wishlistTitle: "xxx", 
      wishlistProductList: [sampleProducts["productB"], sampleProducts["productC"]], wishlistNumProducts: sampleProducts.length,
      wishlistType: "Wishlist", wishlistEventDate: "2025-05-15", wishlistRecipient: "user-12121212"}),
    new Wishlist({userId: "user-33415", wishlistId: "wishlist-guid3", wishlistTitle: "Self-help books", 
      wishlistProductList: [sampleProducts["productA"], sampleProducts["productC"]], wishlistNumProducts: sampleProducts.length,
      wishlistType: "Wishlist", wishlistEventDate: "2024-11-30", wishlistRecipient: "user-33415"}),
];



export const userData = [
  new User({userId: "user-1234567890", firstName: "Nathan", lastName: "Goshay", wishlists: ["wishlist-guid1"], 
    friends: ["user-12121212", "user-33415"], settings: {}, profilePicture: null, claimedItems: []}),
  new User({userId: "user-12121212", firstName: "Michelle", lastName: "Gamba", wishlists: ["wishlist-guid2"], 
      friends: ["user-1234567890", "user-33415"], settings: {}, profilePicture: null, claimedItems: []}),
  new User({userId: "user-33415", firstName: "Jackie", lastName: "Hernandez", wishlists: ["wishlist-guid3"], 
    friends: ["user-1234567890", "user-1234567890"], settings: {}, profilePicture: null, claimedItems: []}),
]