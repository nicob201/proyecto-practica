import { products } from "../data/products";
import ProductList from "../components/products/ProductList";

const Products = () => {
    return (
        <section>
            <h2>Products</h2>
            <ProductList products={products} />
        </section>
    );
};

export default Products;
