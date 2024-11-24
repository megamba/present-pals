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