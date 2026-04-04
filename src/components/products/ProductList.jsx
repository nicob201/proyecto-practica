// Forma vieja con datos locales
/* import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import "./ProductList.scss";

// Componente que renderiza la lista de productos, recibe los productos como props
const ProductList = () => {
    return (
        <section className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList; */

// Forma nueva con supabase
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import "./ProductList.scss";

// Componente que renderiza la lista de productos, recibe los productos como props
const ProductList = () => {
  const { products, loading } = useProducts();
  if (loading) {
    return <div>Cargando productos...</div>;
  }
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
