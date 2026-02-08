import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

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
