import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import sitelog from "../assets/siteLogo.png";
import "../App.css"

const Header = ({ search, setSearch, mens, womens, setCategory, jewelery, electronics }) => {

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
    
   <nav className="navbar navbar-expand-lg navy-header sticky-top shadow-sm">
  <div className="container-fluid px-4 py-1">

    <div className="collapse navbar-collapse d-flex align-items-center " id="navbarContent">

      {/* LOGO */}
      <img src={sitelog} alt="logo" width="135" className="me-4" />

      {/* CATEGORIES */}
      <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={() => setCategory("all")}>All</span>
        </li>
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={mens}>Mens</span>
        </li>
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={womens}>Womens</span>
        </li>
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={jewelery}>Jewellery</span>
        </li>
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={electronics}>Electronics</span>
        </li>
      </ul>

      <div>
        
      </div>

      {/* SEARCH – push to right */}
      <div className="search-container ms-auto me-3">
        <input
          type="search"
          className="search-input"
          placeholder="Try searching..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            navigate("/")
          }
          }
        />
        <span className="search-icon">
          <i className="bi bi-search"></i>
        </span>
      </div>

      {/* CART */}
      <button
        className = "btn btn-outline-light position-relative"
        onClick={() => navigate("/cart")}
      >
        🛒 Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cart.length}
        </span>
      </button>

    </div>
  </div>
</nav>



    </>
  );
};

export default Header;
