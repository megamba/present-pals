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
        productQuantity, productFavorited}) {
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.productPrimaryLink = productPrimaryLink;
        this.productAlternativeLinks = productAlternativeLinks;
        this.productDescription = this.productDescription;
        this.productQuantity = this.productQuantity;
        this.productFavorited = productFavorited
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