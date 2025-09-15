import './index.css'
import Navigation from "./Navigation/Navigation.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import {useState} from "react";

//Data
import products from './Data/data.jsx'
import Card from "./components/Card.jsx";

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    // ---- input Filter-------
    const [query, setQuery] = useState('')

    const handleInputChange = e => {
        setQuery(e.target.value)
    }

    // ---- Radio Filter-------
    const handleChange = event => {
        setSelectedCategory(event.target.value)
    }
    // ---- Buttons Filter-------
    const handleClick = event => {
        setSelectedCategory(event.target.value)
    }

    function filteredData(products, selected, query) {
        let filteredProducts = products
        //Filtering Input items
        if (query) {
            filteredProducts = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1)
        }
        //Selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
                category === selectedCategory
                || color === selected
                || company.toLowerCase() === selected.toLowerCase()
                || newPrice === selected
                || title === selected
            )
        }
        return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) =>
            <Card
                key={Math.random()}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
            />);
    }


    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleChange={handleClick}/>
            <Products products={filteredData(products, selectedCategory, query)}/>
        </>)

}