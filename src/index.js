import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const numberOfOffers = 3;

const onMainTitleClick = () =>{
  return (`Title was clicked`);
};

ReactDOM.render(
    <App
      offers={offers}
      numberOfOffers={numberOfOffers}
      onMainTitleClick={onMainTitleClick}
    />,
    document.getElementById(`root`)
);
