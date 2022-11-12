import React from "react";
import Product from "../components/Product"
import { Link } from "react-router-dom";

function ProductPage({ match }) {
  return (
    <>
      <div>Product page</div>
      <Product id={match.params.id} />
      <Link to="/products">Return to products list</Link>
    </>
  );
}

export default ProductPage;