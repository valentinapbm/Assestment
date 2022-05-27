import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/reducers/productReducer";
import Card from "./Card";


const ProductCard =()=>{

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productReducer);
    
    useEffect(() => {
    dispatch(getProducts())
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

        <div className="container">
            {products.map((item, i)=>(
                <Card product={item} key={i}/>
            ))}
        </div>

    )
}
export default ProductCard;