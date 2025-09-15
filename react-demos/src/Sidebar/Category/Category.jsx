import './category.css'
import React from 'react';
import Input from "../../components/Input.jsx";

const Category = () => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div className="">
               <Input/>
               <Input/>
               <Input/>
               <Input/>
            </div>
        </div>
    );
};

export default Category;