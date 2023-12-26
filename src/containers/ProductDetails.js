import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct} from "../redux/actions/productActions";
import "../styles.css";

const ProductDetails =() => {

    const product = useSelector((state)=>state.product);
    const {image, title, price, category, description} = product;

    const {productId} = useParams();
    console.log(product);

    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((error)=>{
            console.log("Error:",error);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(()=>
    {
        if(productId && productId !=="") fetchProductDetails();
    },[productId])

    return(
        <div>
            {Object.keys(product).length ===0 ? (
                <div>Loading...</div>
            ):(
                <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <div><img className="img-fluid image" src={image} alt=""/></div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h2>Category : {category}</h2>
                            <h4>{title}</h4>
                        </div>
                        <div className="mt-5">
                            <p>{description}</p>
                        </div>
                        <div>
                            <p>Price: $ {price}</p>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};
export default ProductDetails;