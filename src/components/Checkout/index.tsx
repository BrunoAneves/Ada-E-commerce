import React from "react";
import { Product } from "../../types/types";

interface Props {
    cart: Product[];
}

const Checkout: React.FC<Props> = ({ cart }) => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button>Place Order</button>
        </div>
    );
};

export default Checkout;
