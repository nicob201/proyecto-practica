import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import "./Cart.scss";

// Pagina del carrito de compras, muestra los productos agregados al carrito
const Cart = () => {
  const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("¡Gracias por tu compra!");
    clearCart();
    navigate("/");
  };

  return (
    <section className="cart">
      <div className="cart-content">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      text="Eliminar"
                      className={"remove-item-button"}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p>Total de Items: {totalItems}</p>
              <h3>Total: ${totalPrice}</h3>
              <Button onClick={clearCart} text="Limpiar Carrito" className={"clear-cart-button"}/>
            </div>
            <Button onClick={handleCheckout} text="Finalizar Compra" className="checkout-button" />
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
