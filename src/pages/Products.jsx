// Forma vieja con datos locales
/* import { products } from "../data/products";
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

export default Products; */

// Forma nueva con supabase
import ProductList from "../components/products/ProductList";
import { useProducts } from "../hooks/useProducts";

// Componente pagina de productos, lista los productos disponibles
const Products = () => {
  const { products, loading } = useProducts();
  if (loading) {
    return <div>Cargando productos...</div>;
  }
  return (
    <section>
      <h2>Productos</h2>
      <ProductList products={products} />
    </section>
  );
};

export default Products;
