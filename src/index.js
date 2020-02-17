import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const numberOfOffers = 4;

const onMainTitleClick = () =>{
  return (`Title was clicked`);
};

const onHoverPlaceCard = () =>{
  return(`User hover on card`);
};

ReactDOM.render(
    <App
      offers={offers}
      numberOfOffers={numberOfOffers}
      onMainTitleClick={onMainTitleClick}
      onHoverPlaceCard={onHoverPlaceCard}
    />,
    document.getElementById(`root`)
);
