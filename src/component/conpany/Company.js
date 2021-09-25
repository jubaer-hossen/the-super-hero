import React from 'react';

const Company = props => {
    const { name, country, pic, alphanumeric, numberrange, latlng } =
        props.company;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-center">
                        Company: <br /> {alphanumeric}
                    </h4>
                    <div className="card-text text-center">
                        <h5>Ceo: {name}</h5>
                        <p>Country: {country}</p>
                        <p>Email: {numberrange}</p>
                        <h4>Cost: ${latlng}</h4>
                    </div>
                    <div className="d-flex justify-content-center mt-3 fw-bold">
                        <button type="button" class="btn btn-warning d-flex">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
