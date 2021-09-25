import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Company from '../conpany/Company';
import './companies.css';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`./company.JSON`)
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, []);

    const handleAddToCart = company => {
        // console.log(company.name);
        const newCart = [...cart, company];
        setCart(newCart);
    };

    return (
        <div className="companies-container">
            {/* company component */}

            <div className="ms-2 mt-2 row row-cols-1 row-cols-md-3 g-4">
                {companies.map(company => (
                    <Company
                        key={company.key}
                        company={company}
                        handleAddToCart={handleAddToCart}
                    ></Company>
                ))}
            </div>

            {/* total component */}

            <div className="ms-3 mt-5">
                <Cart cart={cart} company={companies.length}></Cart>
            </div>
        </div>
    );
};

export default Companies;
