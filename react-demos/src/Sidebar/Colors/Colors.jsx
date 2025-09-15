import './colors.css'

import React from 'react';
import Input from "../../components/Input.jsx";

const Colors = ({handleChange}) => {
    return (
        <div className="ml">
            <h2 className="sidebar-title color-title">Colors</h2>
            <Input
                handleChange={handleChange}
                value=""
                title="All"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
                color="black"
            />
            <Input
                handleChange={handleChange}
                value="blue"
                title="Blue"
                name="test1"
                color="blue"
            />
            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test1"
                color="red"
            />
            <Input
                handleChange={handleChange}
                value="green"
                title="Green"
                name="test1"
                color="green"
            />
            <Input
                handleChange={handleChange}
                value="white"
                title="White"
                name="test1"
            />
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" onChange={handleChange} value="white" name="test1"/>*/}
            {/*    <span className="checkmark" style={{backgroundColor: "white", border: "2px solid"}}*/}
            {/*    ></span>White*/}
            {/*</label>*/}

        </div>
    );
};

export default Colors;