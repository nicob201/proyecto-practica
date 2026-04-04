import { useState, useEffect } from "react";
import { getProducts } from "../services/productsService";

// Custom hook para manejar el estado de los productos
export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    return { products, loading };
};