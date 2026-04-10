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
import { useState } from "react";

// Componente que renderiza la lista de productos, recibe los productos como props
const ProductList = () => {
  const { products, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState([]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  const categories = [
    "teclados",
    "tv",
    "celulares",
    "notebooks",
    "computadoras",
  ];

  const handleCategoryChange = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((cat) => cat !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const filteredProducts =
    selectedCategory.length === 0
      ? products
      : products.filter((product) =>
          selectedCategory.includes(product.category),
        );

  return (
    <div className="products-page-container">
      <div className="filters-sidebar">
        <h3>Filtros</h3>
        <div className="filter-group">
          <h4>Categorías</h4>
          {categories.map((category) => (
            <label key={category} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedCategory.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="checkbox-text">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="product-list-main">
        <section className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <p className="no-products">
            No se encontraron productos para estas categorías.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
