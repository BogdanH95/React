import './index.css'
import Navigation from "./Navigation/Navigation.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function App() {

    return (
        <>
            <Sidebar />
            <Navigation/>
            <Recommended/>
            <Products/>
        </>)

}