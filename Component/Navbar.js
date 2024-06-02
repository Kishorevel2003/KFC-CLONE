import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Loogo from '../Images/Loogo.svg';
import Cart from '../Images/Cart.svg';
import './Navbar.css'
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";



function Navbar(){
    return(
        <>
        <p class="text-center mt-3"> <MdOutlineLocationOn /> Allow location access for local store menu and promos <button type="button" class="btn btn-dark rounded-pill ms-2">Set location</button>
</p>
        <hr></hr>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    {/* <img src={Loogo} alt=""/> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="Deals nav-link active ms-3" aria-current="page" to="/" ><img src={Loogo}/></Link>
        </li>
        <li class="nav-item">
          <Link className="Menu nav-link ms-3" to="/Menu1">Menu </Link>
        </li>
        <li class="nav-item">
          <Link className="Offers nav-link ms-3" to="/Offers">Deals</Link>
        </li>
      </ul>
      <div className="log d-flex">
      <li class="nav-item">
          <Link class="nav-link" to="/SignIn"><FaUserCircle /> SignIn</Link>
        </li>
        <li class="nav-item">
          <Link class="cart-1 nav-link ms-3" to="/Cart"><ImCart /></Link>
        </li>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;
