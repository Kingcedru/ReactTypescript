import { useEffect } from "react";
import {useState}from 'react'

function ProductList({category}:{category:string}) {
const [products,setProducts] = useState([]);

useEffect(()=>{
    console.log('Fetching products', category)
    setProducts(['Clothing', 'Household'])
},[category])
  return (
    <div>ProductList</div>
  )
}

export default ProductList