import React from "react";
import { GoSearch } from "react-icons/go";

import './styles/Searchbar.css'

const Searchbar = () => {
    return (
        <form className="search-bar" >
            <input type="text" placeholder="Encuentra lo que estás buscando..." className="search-input"/>
            <GoSearch className="search-icon"/>
        </form>
    )
}

export default Searchbar