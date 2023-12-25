import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.css";

const ProductComponents =() => {
    const products = useSelector((state) => state.allProducts.products);
    
        return(
        <div class="container text-center">
        <div className="inner-container">
            <div className="row"> 
            {products.map((product)=>
            {
                return(    
                    <div class="column col-2 mt-3 ms-2 border" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                        <img className="img-fluid" src={product.image} alt={product.id}/>
                            <li>{product.title}</li>
                            <li>${product.price}</li>
                            <li>${product.category}</li>
                        </Link>
                    </div>                   
                );
            })}
             </div>
        </div>
        </div>
        );

};
export default ProductComponents;