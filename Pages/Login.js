import React, { useState } from 'react';
import Loogo from "../Images/Loogo.svg";
import {Link} from 'react-router-dom';


const Counter = () =>{
    const[count,setCount]=useState(0);

    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
    return (    
        < >
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
    </>
    )
}
    export default Counter;
    // //     function Signin(){
    // // }
    
    // {/* <div className='container text-center mt-5 w-50'>
    //     <h3 className='ft-1 mb-5'>LogIn</h3>
    //     <img src={Loogo} alt="..."></img>  
    //     <br></br>
    //     <p className='fs-4 fw-bold mb-5 mt-5'>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE<br></br> NUMBER!</p>
    //     <div className="card mt-5 ">
    //     <div className="card-body">
    //     <h5 className="card-title">LogIn</h5> <br></br>
    //     <div class="mb-3">
    //     <p for="exampleFormControlInput1" class=" text-start form-label ms-2 ">Email address</p>
    //     <input type="email" class="form-control w-100" id="exampleFormControlInput1" placeholder="Enter your Email" required/>
    //     </div>
    //     <br></br>
    //     <div class="mb-3">
    //     <p for="exampleFormControlInput1" class="text-start form-label ms-2 ">Password</p>
    //     <input type="email" class="form-control w-100" id="exampleFormControlInput1" placeholder="Password" required/>
    //     </div>
    //     <button type="submit" className='p-1 rounded-pill fs-6 ps-2 pe-2 btn btn-outline-dark'>LogIn</button>
    //     <Link class="d-inline cart-1 nav-link ms-1" to='/Signin'>/Don't have an account</Link>
    
    //  </div>
    //  </div>
    //  </div> */}