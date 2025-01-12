export class Wishlist {
    constructor({userId, wishlistId, wishlistTitle, wishlistProductList, wishlistNumProducts, 
        wishlistType, wishlistEventDate, wishlistRecipient}) {
        this.userId = userId;
      this.wishlistId = wishlistId;
      this.wishlistTitle = wishlistTitle;
      this.wishlistProductList = wishlistProductList;
      this.wishlistNumProducts = wishlistNumProducts;
      this.wishlistType = wishlistType;
      this.wishlistEventDate = wishlistEventDate;
      this.wishlistRecipient = wishlistRecipient;
    }
}

export class Product {
    constructor({productId, productTitle, productPrice, productImage, 
        productPrimaryLink, productAlternativeLinks, productDescription, 
        productQuantity, productFavorited, ownerId, dateAdded, parentWishlist}) {
            this.claimedBy = null;
            this.dateAdded = dateAdded;
            this.ownerId = ownerId;
            this.productAlternativeLinks = productAlternativeLinks;
            this.productClaimed = false;
            this.productDescription = this.productDescription;
            this.productFavorited = productFavorited;
            this.productId = productId;
            this.productImage = productImage;
            this.productPrice = productPrice;
            this.productPrimaryLink = productPrimaryLink;
            this.productQuantity = this.productQuantity;
            this.productTitle = productTitle;
            this.parentWishlist = parentWishlist;
    }
}

export class User {
    constructor({userId, firstName, lastName, wishlists, friends, settings, 
        profilePicture, claimedItems
    }) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.wishlists = wishlists;
        this.friends = friends;
        this.settings = settings;
        this.profilePicture = profilePicture;
        this.claimedItems = claimedItems;
    }
}