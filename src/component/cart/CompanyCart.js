import React from 'react';

const CompanyCart = props => {
    // console.log(props.singleCart);
    const { company, pic } = props.singleCart;
    return (
        <div className="d-flex mt-3 py-3 ps-3 pe-3 bg-info rounded text-white align-items-center">
            <img className="me-3 rounded" src={pic} alt="" />
            <h4>
                <small>
                    {company}{' '}
                    <i className="fas fa-check-circle text-warning"></i>
                </small>
            </h4>
        </div>
    );
};

export default CompanyCart;
