import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
/* import { products } from "../data/products"; */
import "./ProductDetail.scss";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/Button";

// Pagina de detalle del producto, muestra la informacion del producto seleccionado
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Busca el producto por su id (forma vieja con datos locales)
  /* const product = products.find(
        (item) => item.id === Number(id)
    ); */

  // Con supabase
  const { product, loading } = useProduct(id);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Funcion para incrementar cantidad del producto
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Funcion para decrementar cantidad del producto
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  // Boton para agregar el producto al carrito, llama a la funcion addToCart del contexto
  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log(
      `Agregado al carrito: ${product.title} (Cantidad: ${quantity})`,
    );
  };

  return (
    <section className="product-detail">
      <button className="back-button" onClick={() => navigate("/products")}>
        ← Volver a tienda
      </button>

      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">Precio: ${product.price}</p>
          <div className="quantity-control">
            <p>Cantidad:</p>
            <Button text="-" onClick={decreaseQuantity} className="quantity-button"/>
            <span>{quantity}</span>
            <Button text="+" onClick={increaseQuantity} className="quantity-button"/>
          </div>
          <Button text="Agregar al Carrito" onClick={handleAddToCart} className="add-to-cart-button"/>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
