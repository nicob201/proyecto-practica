import {supabase} from "./supabase";

export const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

export const getProductById = async (id) => {
    const { data, error } = await supabase.from("products").select("*").eq("id", id).single();
    if (error) {
        console.error(error);
        return null;
    }
    return data;
}