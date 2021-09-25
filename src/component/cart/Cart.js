import React from 'react';

const Cart = props => {
    // console.log(props.company);
    const { cart } = props;
    let total = 0;
    for (const company of cart) {
        total = total + company.cost;
    }
    return (
        <div>
            <h3>Total Company: {cart.length}</h3>
            <h3>Total Cost: ${total}</h3>
            <h3> company: {props.company}</h3>
        </div>
    );
};

export default Cart;