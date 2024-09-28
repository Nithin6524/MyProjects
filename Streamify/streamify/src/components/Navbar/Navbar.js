import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import SearchBar from '../Searchbar/SearchBar';
function Navbar() {
    return (
        
        <div className="nav-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="nav flex justify-around  w-screen">
            <Link className="h-12 " to="/"><img src="logo.png" alt="" className="logo mt-0 pt-0 h-full w-full " /> </Link>
            <SearchBar/>
            <Link className="hover:text-violet-900 brightness-200  link  " to="/movies">Movies</Link>
            <Link className="hover:text-violet-900 brightness-200  link  "to="/series">Series</Link>
            <Link className="hover:text-violet-900  brightness-200  link  " to="/popular">Most Popular</Link>
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;