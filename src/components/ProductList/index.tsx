import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types/types";
import SearchAppBar from "../SearchAppBar";
import S from "./styles.module.css";
import ShoppingCartModal from "../ShoppingCartModal";
import B from '../styles/button.module.css'
import { FaCartShopping } from "react-icons/fa6";

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    useEffect(() => {
        axios
            .get<Product[]>("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <>
            {<SearchAppBar />}

            <ShoppingCartModal

                isOpen={isCartModalOpen}
                onRequestClose={() => setIsCartModalOpen(false)}
            />

            <button className={B.buttonCart} onClick={() => setIsCartModalOpen(true)}>
                <FaCartShopping style={{ fontSize: '1.5rem', padding: '0px 10px' }} />
            </button>
            <div className={S.container}>

                <div className={S.productContainer}>
                    {products.map((product) => (
                        <div className={S.product} key={product.id}>
                            <h3 className={S.productTittle}>{product.title}</h3>
                            <img
                                className={S.productImg}
                                src={product.image}
                                alt={product.title}
                            />
                            <span className={S.productFrete}>FRETE GRATIS</span>
                            <p className={S.productPrice}>Valor: R${product.price}</p>
                            <Link className={S.button} to={`/product/${product.id}`}>
                                Ver detalhes
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductList;
