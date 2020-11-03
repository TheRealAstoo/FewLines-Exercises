import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import "../../styles/card.css";

const ProductCard = () => {
  return (
    <div class="card game-card">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default ProductCard;
