import React, { useEffect, useState } from 'react';
import Company from '../conpany/Company';
import './companies.css';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch(`./company.JSON`)
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, []);

    return (
        <div className="companies-container">
            {/* company component */}

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {companies.map(company => (
                    <Company key={company.pin} company={company}></Company>
                ))}
            </div>

            {/* total component */}

            <div className="ms-3">
                <h3>Total:</h3>
            </div>
        </div>
    );
};

export default Companies;
