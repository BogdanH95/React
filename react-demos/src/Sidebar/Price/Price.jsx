import './price.css'
import React from 'react';
import Input from "../../components/Input.jsx";

const Price = () => {
    return (
        <div className="ml">
            <h2 className="sidebar-title price-title">Price</h2>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </div>
    );
};

export default Price;