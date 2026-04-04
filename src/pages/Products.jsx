import { products } from "../data/products";
import ProductList from "../components/products/ProductList";

// Componente pagina de productos, lista los productos disponibles
const Products = () => {
    return (
        <section>
            <h2>Productos</h2>
            <ProductList products={products} />
        </section>
    );
};

export default Products;
