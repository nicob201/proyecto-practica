import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <section style={styles.grid}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1.5rem",
    },
};

export default ProductList;
