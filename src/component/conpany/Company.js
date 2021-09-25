import React from 'react';

const Company = props => {
    // console.log(props);
    const { name, country, pic, company, email, cost } = props.company;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">
                        Company: <br /> {company}
                    </h3>
                    <div className="card-text text-center">
                        <h5>Ceo: {name}</h5>
                        <p>Country: {country}</p>
                        <p>Email: {email}</p>
                        <h4>Cost: ${cost}</h4>
                    </div>
                    <div className="d-flex justify-content-center  fw-bold mt-3">
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
        </div>
    );
};

export default Company;
