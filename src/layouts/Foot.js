import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css"

function Foot() {
  return (
    <div>
      <h2>Footer</h2>
      <Route path="/" exact render={(props) => (
        <p>You are on <span>Main Page</span></p>
      )
      } />
      <Route path="/:page" render={(props) => (
        <p>You are on <span>{props.match.params.page}</span></p>
      )
      } />
    </div>
  );
}

export default Foot;