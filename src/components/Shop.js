import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Shop = () => {

const [item,setItems]=useState([]);


useEffect(() => {
     
    getProducts();
    
}, [ ])




    const getProducts= async ()=>{

    const res= await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const data= await res.json(); 
    setItems( data.data ); 
}





    return (
        <div>
            {item.map(items => <h1 key={items.itemId}> 
           <Link to={`Shop/${items.itemId}`}>{items.item.name}</Link>  
            </h1>)  }
        </div>
    )
}

export default Shop
