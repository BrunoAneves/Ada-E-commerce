import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../types/types";
import axios from "axios";
import ShoppingCartModal from "../ShoppingCartModal";
import S from './styles.module.css'
import B from '../styles/button.module.css'
import SearchAppBar from "../SearchAppBar";

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    useEffect(() => {
        axios
            .get<Product>(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    const addToCart = () => {
        if (product) {
            const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
            const updatedCart = [...existingCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            alert("Produto adicionado ao carrinho!");
        }
    };

    return (
        <div className={S.container}>
            {<SearchAppBar />}
            {product ? (

                <div className={S.detailsCard}>
                    <div className={S.CardImg}>
                        <img className={S.detailsImg} src={product.image} alt={product.title} />
                    </div>
                    <div className={S.CardInfos}>
                        <h2 className={S.productTitle}>{product.title}</h2>
                        <p className={S.productPrice}>R${product.price}</p>
                        <p className={S.productDescription}>{product.description}</p>
                    </div>

                    <div className={B.detailsButton}>
                        <button className={B.button} onClick={addToCart}>Adicionar ao carrinho</button>
                        <button className={B.button} onClick={() => setIsCartModalOpen(true)}>
                            Ver carrinho
                        </button>
                    </div>


                </div>



            ) : (
                <div>Loading...</div>
            )}

            <ShoppingCartModal
                isOpen={isCartModalOpen}
                onRequestClose={() => setIsCartModalOpen(false)}
            />
            <div className={S.containerButton}>
                <Link className={B.button} to="/">
                    Voltar para Produtos</Link>
            </div>
        </div>
    );
};

export default ProductDetails;
