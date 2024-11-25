import React from 'react';

// Mock wishlist data matching your sample product lists
const mockWishlists = {
  '1': {
    wishlistId: '1',
    listTitle: 'Smell Products',
    numProducts: 420,
    wishListDescription: 'for my smelly things',
    items: [
      { id: 'item-1', name: 'Smelly Candle', price: 19.99 },
      { id: 'item-2', name: 'Fragrance Diffuser', price: 39.99 }
    ]
  },
  '2': {
    wishlistId: '2',
    listTitle: 'Electronics',
    numProducts: 12,
    wishListDescription: 'cool things',
    items: [
      { id: 'item-3', name: 'Smart Watch', price: 249.99 },
      { id: 'item-4', name: 'Noise-Canceling Earbuds', price: 179.99 }
    ]
  },
  '3': {
    wishlistId: '3',
    listTitle: 'Clothing',
    numProducts: 8,
    wishListDescription: 'list of clothes I want',
    items: [
      { id: 'item-5', name: 'Graphic T-Shirt', price: 29.99 },
      { id: 'item-6', name: 'Hoodie', price: 59.99 }
    ]
  },
  '4': {
    wishlistId: '4',
    listTitle: 'Books',
    numProducts: 25,
    wishListDescription: 'list of books I want',
    items: [
      { id: 'item-7', name: 'Science Fiction Novel', price: 14.99 },
      { id: 'item-8', name: 'Programming Handbook', price: 44.99 }
    ]
  }
};

export default function WishlistPage({ searchParams = {} }) {
  // Extract the wishlist ID from search parameters, with a fallback
  const wishlistId = searchParams.id || null;

  // Fetch the wishlist data (using mock data for now)
  const wishlist = wishlistId ? mockWishlists[wishlistId] : null;

  // Handle case where no wishlist is found
  if (!wishlist) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-600">Wishlist Not Found</h1>
        <p>Please select a valid wishlist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{wishlist.listTitle}</h1>
      
      <div className="mb-4">
        <p className="text-gray-600">{wishlist.wishListDescription}</p>
        <p className="text-sm text-gray-500">Total Items: {wishlist.numProducts}</p>
      </div>

      <div className="grid gap-4">
        {wishlist.items.map((item) => (
          <div 
            key={item.id} 
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}