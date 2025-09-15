import './products.css'
import React from 'react';

const Products = ({products}) => {
    return (
        <>
            <section className="card-container">
                {products}
            </section>
        </>
    );
};

export default Products;