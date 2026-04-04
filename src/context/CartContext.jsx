import { createContext, useState, useContext } from "react";

// Se crea el contexto del carrito de compras
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product, quantity) => {
    if (cart.some((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Función para remover un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función para calcular el total de unidades en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Función para calcular el total del carrito
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito de compras
export const useCart = () => {
  return useContext(CartContext);
};
