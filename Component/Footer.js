import React from "react";
import CAT233 from '../Images/CAT233.jpg';
import Logo from '../Images/Logo.svg';
import Gpay from '../Images/Gpay.svg';
import Apple from '../Images/Apple.svg';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function Footer(){
    return(
        <>
        <footer className="footer">
       {/* <div className="container">
            <div className="row">
                <div className="footer-2L col-lg-12 mt-5">
                    <h1>OFFERS AND DEALS</h1><p>view all deals</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <div className="card">
                <img src={CAT233} className="img-fluid" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" className="btn btn-primary">APPLY</a>
                </div>
              </div>
                </div>
                <div className="col-lg-3">
                <div className="card">
                <img src={CAT233} className="img-fluid" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" className="btn btn-primary">APPLY</a>
                </div>
              </div>
                </div>
                <div className="col-lg-3">
                <div className="card">
                <img src={CAT233} className="img-fluid" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" className="btn btn-primary">APPLY</a>
                </div>
              </div>
                </div>
                <div className="col-lg-3">
                <div className="card">
                <img src={CAT233} className="img-fluid" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">FREE CHICKEN...</h5>
                  <p className="card-text">1 Pc free chicken ginger burger on a cart value of 499 or above</p>
                  <a href="">view details</a>
                  <a href="#" className="btn btn-primary">APPLY</a>
                </div>
              </div>
                </div>
            </div>
        </div> */}
    <div className="container">
        <div className="row">
           <div className="col-sm-8">
            <div className="row">
                <div className="col-sm-2">
                <img src={Logo} class="img-fluid" alt="..."/>
                </div>
                <div className="col-sm-2">
                    <p>Legal</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                    <p>Caution Notice</p>
                </div>
                <div className="col-sm-2">
                    <p>KFC India</p>
                    <p>About KFC</p>
                    <p>KFC care</p>
                    <p>Careers</p>
                    <p>Our Golden spot</p>
                </div>
                <div className="col-sm-2">
                    <p>KFC Food</p>
                    <p>Menu</p>
                    <p>Order Lookup</p> 
                    <p>Gift Card</p>
                    <p>Nutrition & Allergen</p>
                </div>
                <div className="col-sm-2">
                    <p>Support</p>
                    <p>Get Help</p>
                    <p>Contact Us</p>
                    <p>KFC Feedback</p>
                    <p>Privacy Policy</p> 
                </div>
            </div>
           </div>
           <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-4">
                    <p> <MdOutlineLocationOn />Find a KFC</p>
                </div>
                <div className="col-sm-4">
                <img src={Gpay} class="img-fluid" alt="..."/>
                </div>
                <div className="col-sm-4">
                <img src={Apple} class="img-fluid" alt="..."/>
                </div>
            </div>
           </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-9">
            <p class="text-sm-center">Copyright © KFC Corporation 2024 All Rights Reserved</p>
            </div>
            <div className="col-lg-3 ">
                <div className="row">
                    <div className="col-sm-1">
                       <FaWhatsapp />
                    </div>
                    <div className="col-sm-1">
                       <FaWhatsapp />
                    </div>
                    <div className="col-sm-1">
                       <FaWhatsapp />
                    </div>
                </div>
            </div>
        </div>
    </div>

       </footer>
        </>
    )
}

export default Footer;