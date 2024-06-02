import React from "react";
import Capture from '../Images/Capture.PNG';
import Navbar from "../Component/Navbar";

function Offers(){
    return(
        <>
        <Navbar/>
        <div className="container-fluid">
        <div class=" p-3 bg-dark text-center text-white">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN <button type="button" class="btn btn-danger rounded-pill ms-2">Start Order</button></div>
        </div>
        <div className="container-fluid">
        <img src={Capture} class="img-fluid" alt="..."/>
        </div>
        <div className="container">
            <div className="row">
                
            </div>
        </div>
        </>
    )

}
export default Offers;