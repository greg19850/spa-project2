import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/Head.css";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

function Head() {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => (
          <img src={img1} alt='city 1' />
        )} />
        <Route path="/products" render={() => (
          <img src={img2} alt='city 2' />
        )} />
        <Route path="/contact" render={() => (
          <img src={img3} alt='city 3' />
        )} />
        <Route path="/admin" render={() => (
          <img src={img4} alt='city 4' />
        )} />
        <Route render={() => (
          <img src={img5} alt='city 5' />
        )} />
      </Switch>
    </>
  );
}

export default Head;