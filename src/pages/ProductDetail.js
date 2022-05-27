import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/reducers/productDetailReducer";

const ProductDetail =()=>{
    const dispatch = useDispatch();
    const {id}=useParams();
    const { products, loading, error } = useSelector((state) => state.productDetailReducer);
    
    useEffect(() => {
    dispatch(getProduct(id))
    }, []);

    if(loading===true){
        return (
            <div className="spinner-container">
                <div className="loading-spinner">
            </div>
            <p>Loading...</p>
        </div>)
    }
    if (error !== null) {
        return <p>UPS! ocurrió un error. Error:{error}</p>;
    }

    return (
        <section className="container-box">
            <div className="container-product">
                <img src={products.image} alt=""></img>
                    <div className="info-product">
                        <h2>{products.title}</h2>
                        <h3>Category: {products.category}</h3>
                        <h4>Rating: {products.rating && products.rating.rate} <AiFillStar style={{color:"#FDCC0D"}}></AiFillStar></h4>
                        <h4>Price: $ {products.price}</h4>
                        <p>{products.description}</p>
                    </div>
            </div>
        </section>
    )
}

export default ProductDetail;