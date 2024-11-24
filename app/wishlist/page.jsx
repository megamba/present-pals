"use client";

import React from "react";
import { useRouter, useState } from "react";
import { useSearchParams } from 'next/navigation';

import { getUserId } from "../lib/firebase";
import {fetchUserWishlists, fetchWishlistById} from "../lib/db.js";


export default function WishlistPage() {
    const router = useRouter();
  const { wishlistId } = router.query;
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const userId = await getUserId();
        const wishlist = await fetchWishlistById(userId, wishlistId);
        setWishlist(wishlist);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    if (wishlistId) {
      loadWishlist();
    }
  }, [wishlistId]);

  if (!wishlist) return <div>Loading...</div>;

  return (
    <div>
      <h1>{wishlist.wishlistName}</h1>
      <ul>
        {wishlist.productList.map((product) => (
          <li key={product.productId}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}