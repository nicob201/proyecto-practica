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

////////////////////////////////////
// Forma nueva con supabase
////////////////////////////////////
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import "./ProductList.scss";
import { useEffect, useState } from "react";

// Componente que renderiza la lista de productos, recibe los productos como props
const ProductList = () => {
  const { products, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState([]);

  // Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Resetear pagina al cambiar de categoria
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

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

  // Reseteo de filtro
  const clearFilters = () => {
    setSelectedCategory([]);
    setCurrentPage(1);
  };

  const filteredProducts =
    selectedCategory.length === 0
      ? products
      : products.filter((product) =>
          selectedCategory.includes(product.category),
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="products-page-container">
      <div className="filters-sidebar">
        <div className="sidebar-header">
          <h3>Filtros</h3>
          {selectedCategory.length > 0 && (
            <button className="clear-btn" onClick={clearFilters}>
              Limpiar filtros
            </button>
          )}
        </div>
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
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {/* Controles de paginacion */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Siguiente
            </button>
          </div>
        )}

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
