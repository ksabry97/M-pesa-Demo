import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const mockProducts = [
  {
    id: "1",
    image: "https://example.com/product1.jpg",
    category: "Electronics",
    title: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    currency: "$",
    seller: "TechStore",
    rating: 4.5,
    reviewCount: 120,
    isNewArrival: true,
  },
  {
    id: "2",
    image: "https://example.com/product2.jpg",
    category: "Home Appliances",
    title: "Air Conditioner",
    description: "Energy efficient with fast cooling",
    price: 499,
    currency: "$",
    seller: "HomeComfort",
    rating: 4.0,
    reviewCount: 85,
    isNewArrival: false,
  },
];

const ProductCard = () => {
  const [favorites, setFavorites] = useState({});

  const toggleWishlist = (id: any) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id] ,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 p-4">
      {mockProducts.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          {/* Image Section */}
          <div className="relative bg-gray-200 h-64">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />

            {/* New Arrival Badge */}
            {product.isNewArrival && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  New arrival
                </span>
              </div>
            )}

            {/* Favorite Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites[product.id]
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600"
                }`}
              />
            </button>

            {/* Add to Cart Button */}
            <button className="absolute bottom-4 left-4 right-4 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>

          {/* Content Section */}
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {product.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.round(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price + Buy */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {product.currency} {product.price}
                </p>
                <p className="text-sm text-gray-500">{product.seller}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
