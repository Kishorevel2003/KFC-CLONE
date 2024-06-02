import React from "react";
import Periperi from "../Periperi/Periperi";
import Value from "../Periperi/Value";
import './Menu1.css'
import Chicken from "../Periperi/Chicken";
import Cbucket from "../Periperi/Cbucket";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Form from "./Form";

import { addToCart, deleteFromCart } from "../Store/CartSlice/cartSlicess";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

function Menu1(){

        const cartProducts=useSelector((state)=>state.cart.cartItems)

         const dispatch = useDispatch();

         const addCart = (item) => {
            dispatch(addToCart(item))
         }

         const deleteCart = (item) =>{
            dispatch(deleteFromCart(item))
         }

    return(
    <>
    <Navbar/>
    <section class="menu">
    <div class="container">
        <div class="row">
            <div class="list col-lg-3">
                <div class=" log row position-sticky top-0 bg-white w-100 mb-2">
                <h3 className="Text-Start mt-3 mb-3">KFC MENU</h3>
                    <ul>
                        <a href="#ppc"><li>PERI PERI CHICKEN</li></a>
                        <a href="#vs"><li>VALUE SNACKERS</li></a>
                        <a href="#cr"> <li>CHICKEN ROLLS</li></a>
                        <a href="#cb"><li>CHICKEN BUCKETS</li></a> 
                        <li>BIRYANI BUCKETS</li>
                        <li>BOX MEALS</li>
                        <li>BURGERS</li>
                        <li>SNACKS</li>
                        <li>BEVERAGES</li>
                    </ul>
                </div>
            </div>

            <div className="col-md-9">
            <h3 id="ppc">PERI PERI CHICKEN</h3>
                <div className="row">
                 {Periperi.map((item)=>(
                <div className="col-lg-6 mb-5">
                    <div className="card" key={item.id}>
                            <img src={item.img} class="img-fluid" alt="" />
                            <div className="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.price}</p>
                            <p class="card-text">{item.desc}</p> 
                            </div>
                    {cartProducts.find(items =>items.id===item.id)?
                        <button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>
                       :<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>
                    }
                    </div>
                    </div>
 
                        ))}
                </div>
                <h3 id="vs">VALUE SNACKS</h3>
            <div className="row">
                 {Value.map((item)=>(
                <div className="col-md-4 mb-5">
                    <div className="card" key={item.id}>
                            <img src={item.img} class="img-fluid" alt="" />
                            <div className="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.price}</p>
                            <p class="card-text">{item.desc}</p> 
                    </div>
                    </div>
                    {cartProducts.find(items =>items.id==item.id)?
                        <button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>
                       :<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>
                    }
                    </div>
                        ))}
                </div>
                <h3 id="cr">CHICKEN ROLL</h3>
                <div className="row">
                 {Chicken.map((item)=>(
                <div className="col-md-4 mb-5">
                    <div className="card" key={item.id}>
                            <img src={item.img} class="img-fluid" alt="" />
                            <div className="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.price}</p>
                            <p class="card-text">{item.desc}</p> 
                    </div>
                    </div>
                    {cartProducts.find(items =>items.id==item.id)?
                        <button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>
                       :<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>
                    }
                    </div>
                        ))}
                </div>
                <h3 id="cb">BUCKET CHICKEN</h3>
                <div className="row">
                    {Cbucket.map((item)=>(
                        <div className="col-lg-6">
                              <div className="card" key={item.id}>
                            <img src={item.img} class="img-fluid" alt="" />
                            <div className="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.price}</p>
                            <p class="card-text">{item.desc}</p> 
                    </div>
                    </div>
                    {cartProducts.find(items =>items.id==item.id)?
                        <button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>
                       :<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>
                    }
                    </div>
                    ))}
                </div>
            </div>
         </div>
    </div>
   </section>
<Form/>
   <Footer/>
    </>
    )
}

export default Menu1;