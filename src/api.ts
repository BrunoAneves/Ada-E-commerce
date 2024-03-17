import axios from "axios";
import { Product } from "./types/types";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>("/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};


