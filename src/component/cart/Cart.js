import React from 'react';
import CompanyCart from './CompanyCart';

const Cart = props => {
    const { cart } = props;
    // console.log(cart[0]);

    let total = 0;

    for (const company of cart) {
        total = total + company.cost;
    }
    // console.log(cart);
    return (
        <div className="bg-primary ps-3 pe-5 py-5 ms-3 text-white rounded">
            <div>
                <h3>Total Company: {cart.length}</h3>
                <h3>Total Cost: ${total}</h3>
                <br />
                <h2 className="text-center">Companies:</h2>
            </div>

            {/* show added companies */}
            <div>
                {cart.map(singleCart => (
                    <CompanyCart
                        key={singleCart.key}
                        singleCart={singleCart}
                    ></CompanyCart>
                ))}
            </div>
        </div>
    );
};

export default Cart;
