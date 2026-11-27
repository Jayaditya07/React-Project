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
   
  )
}

export default App;