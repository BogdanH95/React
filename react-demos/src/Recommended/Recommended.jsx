import './recommended.css'
import React from 'react';
import Button from "../components/Button.jsx";

const Recommended = ({handleChange}) => {
    return (
        <>
        <div>
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
                <Button onClickHandler={handleChange} title={'All'} />
                <Button onClickHandler={handleChange} title={'Nike'} />
                <Button onClickHandler={handleChange} title={'Adidas'} />
                <Button onClickHandler={handleChange} title={'Puma'} />
                <Button onClickHandler={handleChange} title={'Vans'} />
            </div>
        </div>
        </>
    );
};

export default Recommended;