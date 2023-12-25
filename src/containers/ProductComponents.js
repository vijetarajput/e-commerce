import React from "react";
import { useSelector } from "react-redux";

const ProductComponents =() => {
    const products = useSelector((state) => state.allProducts.products);
    // const {id, title} =products[0];

    return(
        <div className="four column wide">
            <div className="ui link card">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        {/* <div className="header">{id}</div>
                        <div className="header">{title}</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductComponents;