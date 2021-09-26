import React from 'react';

const Cart = props => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let company1 = [];
    for (const company of cart) {
        total = total + company.cost;
        company1 += company.company + ', ';
    }
    // console.log(cart);
    return (
        <div className="bg-primary ps-3 pe-5 py-5 ms-3 text-white rounded">
            <h3>Total Company: {cart.length}</h3>
            <h3>Total Cost: ${total}</h3>
            <br />
            <h3 className="text-center"> Companies name: {company1}</h3>
        </div>
    );
};

export default Cart;
