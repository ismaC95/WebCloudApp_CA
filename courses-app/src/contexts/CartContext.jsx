import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [addedToCart, setAddedToCart] = useState([
  {
    id: 1,
    title: "Introduction to Digital Marketing",
    description:
      "Learn the fundamentals of digital marketing, SEO, and advertising.",
    price: 15.00,
    originalPrice: 19.99,
    rating: 4.7,
    reviews: 856,
    duration: "1-3 Hours",
    modules: 8,
    level: "Beginner",
    image: "/Course_images/marketing1.jpeg",
    category: "Marketing",
    priceDisplay: "Free",
    originalPriceDisplay: 19.99
  },
  {
    id: 3,
    title: "SEO Optimization Crash Course",
    description: "Learn how to optimize websites for Google search rankings.",
    price: 9.99,
    originalPrice: 24.99,
    rating: 3.7,
    reviews: 612,
    duration: "0-1 Hour",
    modules: 5,
    level: "Beginner",
    image: "/Course_images/marketing3.png",
    category: "Marketing",
    priceDisplay: 9.99,
    originalPriceDisplay: 24.99,
  },
]);

  const addToCart = (course) => {
    setAddedToCart((prev) => {
      const alreadyInCart = prev.find(item => item.id === course.id);
      if (alreadyInCart) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId) => {
    setAddedToCart((prev) => prev.filter((item) => item.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ addedToCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
