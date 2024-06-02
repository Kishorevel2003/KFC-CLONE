import React from "react";
import './Home.css'
import Home1 from '../Images/Home1.webp';
import CAT233 from '../Images/CAT233.jpg';
import Logo from '../Images/Logo.svg';
import Gpay from '../Images/Gpay.svg';
import Apple from '../Images/Apple.svg';
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <div className="container-fluid">
        <div class=" p-3 bg-dark text-center text-white">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN <button type="button" class="btn btn-danger rounded-pill ms-2">Start Order</button></div>
        </div>
        <img src={Home1} class="img-fluid container-fluid" alt="..."/>
        <div className="container">
            <div className="row">
                <div className=" Browser col-lg-12 mt-5">
                    <p>BROWSE CATEGORIES</p>
                </div>
            </div>
        </div>
  
        <div className="container text-center">
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
       </div>
       </div>
   
       <div className="container text-center mt-5 mb-5">
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
           <div className="col"><img src={CAT233} class="img-fluid" alt="..."/></div>
       </div>
       </div>

       <Footer/>
        </>
    )
}

export default Home;