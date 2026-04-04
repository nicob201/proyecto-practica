import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

// Renderiza una card de producto, recibe el producto como props
const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    // Al hacer click en la card, navega a la pagina de detalle del producto
    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <article className="product-card" onClick={handleClick}>
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />

            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
            </div>
        </article>
    );
};

export default ProductCard;
