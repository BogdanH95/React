import React from 'react';

const Button = ({onClickHandler, title}) => {
    const value = title === "All" ? null : title.toLowerCase()
    return (
        <button
            className="btn"
            onClick={onClickHandler}
            value={value}>
            {title}
        </button>
    );
};

export default Button;