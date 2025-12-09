/**
 * Example component demonstrating how to use the Zustand product store
 * This file is for reference only and can be deleted if not needed
 */

import React from "react";
import { useProductStore } from "../store/useProductStore";

export function StoreUsageExample() {
  // Access store state and actions
  const {
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    setSortBy,
    addToCart,
    toggleFavorite,
    isFavorite,
    cart,
  } = useProductStore();

  // Get computed/filtered data
  const filteredServices = useProductStore((state) =>
    state.getFilteredServices()
  );
  const featuredServices = useProductStore((state) =>
    state.getFeaturedServices()
  );
  const categories = useProductStore((state) => state.categories);
  const cartTotal = useProductStore((state) => state.getCartTotal());

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">M-Pesa Marketplace Demo</h1>

      {/* Search */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Search</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search services..."
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            All Categories
          </button>
          {categories.slice(0, 5).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="px-4 py-2 bg-blue-100 rounded-lg hover:bg-blue-200"
            >
              {category.name} ({category.serviceCount})
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sort By</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy("popular")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Popular
          </button>
          <button
            onClick={() => setSortBy("rating")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Highest Rated
          </button>
          <button
            onClick={() => setSortBy("price-low")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Price: Low to High
          </button>
          <button
            onClick={() => setSortBy("price-high")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Price: High to Low
          </button>
        </div>
      </div>

      {/* Featured Services */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {service.shortDescription}
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold">
                  {service.currency} {service.basePrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">
                  ⭐ {service.rating} ({service.reviewCount})
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    addToCart({
                      serviceId: service.id,
                      quantity: 1,
                    })
                  }
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => toggleFavorite(service.id)}
                  className={`px-4 py-2 rounded-lg ${
                    isFavorite(service.id)
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {isFavorite(service.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Services (Filtered) */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          All Services ({filteredServices.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredServices.map((service) => (
            <div key={service.id} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {service.currency} {service.basePrice.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">
                ⭐ {service.rating} ({service.reviewCount} reviews)
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {cart.items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-2 mb-4">
              {cart.items.map((item) => {
                const service = useProductStore
                  .getState()
                  .services.find((s) => s.id === item.serviceId);
                return (
                  <div
                    key={`${item.serviceId}-${item.packageId}`}
                    className="flex justify-between items-center bg-white p-3 rounded"
                  >
                    <div>
                      <p className="font-medium">{service?.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        useProductStore
                          .getState()
                          .removeFromCart(item.serviceId)
                      }
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total:</span>
                <span>
                  {cart.currency} {cartTotal.toLocaleString()}
                </span>
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Checkout with M-Pesa
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
