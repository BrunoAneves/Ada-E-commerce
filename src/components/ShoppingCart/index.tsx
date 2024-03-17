import React, { useEffect, useState } from "react";

import { Product } from "../../types/types";
import S from './style.module.css'
import B from '../styles/button.module.css'


const ShoppingCart: React.FC = () => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(existingCart);
    }, []);

    const removeFromCart = (productToRemove: Product) => {
        const updatedCart = cart.filter((product) => product !== productToRemove);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className={S.container}>
            <h2 className={S.cartTittle}>Meu carrinho</h2>
            {cart.map((product, index) => (
                <div className={S.card} key={index} >
                    <ul className={S.cartProducts} key={product.id}>

                        <li className={S.cartProduct} >
                            <img className={S.cartImg} src={product.image} alt={product.title} />
                            <p className={S.cartInfos}>
                                {product.title} - ${product.price}
                            </p>
                            <button className={B.button2} onClick={() => removeFromCart(product)}>Remover</button>
                        </li>

                    </ul>
                </div>
            ))}

        </div>
    );
};

export default ShoppingCart;
