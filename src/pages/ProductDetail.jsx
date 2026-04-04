import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.scss";

// Pagina de detalle del producto, muestra la informacion del producto seleccionado
const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Busca el producto por su id
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

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
                    <p className="price">${product.price}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
