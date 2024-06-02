import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Menu1 from './Pages/Menu1';
import Signin from './Pages/Signin';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Footer from './Component/Footer';
import Offers from './Pages/Offers'; 
import UploadItems from './Admin/Upload';
import Updateitems from './Admin/Update';
import EditItems from './Admin/Edit';




function App() {
    return(
        <>
        {/* <Navbar/> */}
       

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Menu1' element={<Menu1/>}></Route>
            <Route path='/Offers' element={<Offers/>}></Route>
            <Route path='/Signin' element={<Signin/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/admin/upload' element={<UploadItems/>}/>
          <Route path='/admin/update' element={<Updateitems/>}/>
          <Route path='/admin/edititems/:id' element={<EditItems />} loader={({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)}/>
        </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
         </>
    )

}

export default App;
