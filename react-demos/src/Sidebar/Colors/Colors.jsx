import './colors.css'

import React from 'react';
import Input from "../../components/Input.jsx";

const Colors = () => {
    return (
        <div className="ml">
            <h2 className="sidebar-title color-title">Colors</h2>
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
};

export default Colors;