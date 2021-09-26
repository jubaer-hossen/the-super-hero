import React from 'react';

const Company = props => {
    // console.log(props);
    const { name, country, pic, company, email, cost } = props.company;

    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">
                        Company: <br />
                        <span className="fw-bolder"> {company}</span>
                    </h3>
                    <div className="card-text fw-bold mt-5">
                        <h5 className="fw-bolder">Ceo: {name}</h5>
                        <p>Country: {country}</p>
                        <p>Email: {email}</p>
                        <h4 className="text-center">Cost: ${cost}</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-center fw-bold mb-4">
                    <button
                        onClick={() => props.handleAddToCart(props.company)}
                        type="button"
                        className="btn btn-warning"
                    >
                        <i className="fas fa-shopping-cart"></i>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Company;
