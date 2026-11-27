import React, { useState } from "react";
import ProductList from "./component/ProductList";
import "./App.css";

function App()
{

  const[cart,setcart] = useState([])

  function handelAddtoCart(product){
    setcart([...cart,product])
  }


  return(
    <div>
      <h1>ShopCart</h1>
      <h3>Cart : {cart.length}</h3>
      <ProductList onAddtoCart={handelAddtoCart}/>
      
    </div>
  )
}

export default App;