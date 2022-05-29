import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
           <img src={img} alt="" />
           <h2>{name}</h2>
           <h3 className="text-danger">{expertize}</h3>
        </div>
    );
};

export default Expert;