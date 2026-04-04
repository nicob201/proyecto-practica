import { useState, useEffect } from "react";
import { getProductById } from "../services/productsService";

// Hook para manejar el estado de un producto especifico por id
export const useProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    return { product, loading };
}