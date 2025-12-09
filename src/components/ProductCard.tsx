/**
 * ProductCard Demo/Example Component
 * 
 * This file demonstrates how to use the new ProductCard component.
 * The actual ProductCard component is located in src/components/ProductCard/
 */

import { useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";

const mockProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    category: "Food & Beverages",
    location: "Nairobi, Kenya",
    duration: 240,
    title: "Nyama Choma Catering (20 pax)",
    description: "Traditional Kenyan BBQ catering service for events",
    price: 15000.30,
    currency: "AED",
    rating: 4.5,
    reviewCount: 738,
    isVerified: true,
    merchantLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400",
    category: "Cleaning Services",
    location: "Mombasa, Kenya",
    duration: 120,
    title: "Professional Office Cleaning",
    description: "Thorough office cleaning by trusted professionals",
    price: 5000.00,
    currency: "AED",
    rating: 4.8,
    reviewCount: 245,
    isVerified: false,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
    category: "Design & UI/UX",
    location: "Kampala, Uganda",
    duration: 480,
    title: "Website Redesign Service",
    description: "Complete website redesign with modern UI/UX",
    price: 25000.50,
    currency: "AED",
    rating: 4.2,
    reviewCount: 156,
    isVerified: true,
  },
];

const ProductCardDemo = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const handleFavoriteToggle = (productId: string, isFavorite: boolean) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: isFavorite,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          imageAlt={product.title}
          category={product.category}
          location={product.location}
          duration={product.duration}
          isFavorite={favorites[product.id] || false}
          onFavoriteToggle={(isFavorite) =>
            handleFavoriteToggle(product.id, isFavorite)
          }
          merchantLogo={product.merchantLogo}
          rating={product.rating}
          reviewCount={product.reviewCount}
          title={product.title}
          description={product.description}
          isVerified={product.isVerified}
          price={product.price}
          currency={product.currency}
          onBookNow={() => {
            console.log(`Book now: ${product.title}`);
          }}
          onClick={() => {
            console.log(`Card clicked: ${product.title}`);
          }}
          hideLocation={false}
        />
      ))}
    </div>
  );
};

export default ProductCardDemo;
