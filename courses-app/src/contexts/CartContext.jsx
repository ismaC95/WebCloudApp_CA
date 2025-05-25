import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let storedCartCourses = [];

  try {
    const stored = localStorage.getItem('course');
    storedCartCourses = stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
  }

  const [addedToCart, setAddedToCart] = useState(storedCartCourses);

  useEffect(()=> {
    localStorage.setItem('course', JSON.stringify(addedToCart));
  }, [addedToCart])

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

  const clearCart = () => {
        setAddedToCart([]);
    }

  return (
    <CartContext.Provider value={{ addedToCart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
