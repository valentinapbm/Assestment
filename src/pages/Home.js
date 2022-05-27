import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../images/banner.png";
import Sale from "../images/sale.png"

const Home =()=>{

    return (
        <div className="main-container">
            <section className="banner">
                <img src={Banner} alt="banner" loading="lazy"></img>
            </section>
            <section className="titlebox">
                <img src={Sale} alt="banner" loading="lazy"></img>
            </section>
            <section className="container-home">
                <ProductCard></ProductCard>
            </section>
        </div>
    )
}

export default Home;