import React from 'react';
import Loogo from "../Images/Loogo.svg"
import {Link} from 'react-router-dom'
function Signin(){
    return (
        < >
        <div className='container text-center mt-5 w-50'>
            <p className='ft-1 mb-5'>Sign In / Sign up</p>
            <img src={Loogo} alt="..."></img>  
            <br></br>
            <p className='fs-4 fw-bold mb-5 mt-5'>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE<br></br> NUMBER!</p>
            <div className="card mt-5 ">
            <div className="card-body">
            <h5 className="card-title">SignIn</h5> <br></br>
            <div class="mb-3">
            <p for="exampleFormControlInput1" class=" text-start form-label ms-2 ">Email address</p>
            <input type="email" class="form-control w-100" id="exampleFormControlInput1" placeholder="Enter your Email" required/>
            </div>
            <br></br>
            <div class="mb-3">
            <p for="exampleFormControlInput1" class="text-start form-label ms-2 ">Password</p>
            <input type="email" class="form-control w-100" id="exampleFormControlInput1" placeholder="Password" required/>
            </div>
            <button type="submit" className='p-1 rounded-pill fs-6 ps-2 pe-2 btn btn-outline-dark'>SignIn</button>
            <Link class="d-inline p-2 cart-1 nav-link ms-1" to='/Login'>/Already have an account</Link>

         </div>
         </div>
         </div>
        </>
    )
}

export default Signin;