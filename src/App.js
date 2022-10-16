import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App(){

    data.map(item =>
        <Card
            img={item.coverImg}
            rating={item.stats.rating}
            review={item.stats.reviewCount}
            country={item.location}
            description={item.title}
            price={item.price}
        />
    )     

    return (
        <div>
            <Navbar />
            <Hero />
            <Card/>
        </div>
    )
}