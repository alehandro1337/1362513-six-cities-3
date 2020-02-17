import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import OffersList from "../offers-list/offers-list.jsx";

const App = ({offers, numberOfOffers, onMainTitleClick, onHoverPlaceCard}) => {
  return <div>
    <h1>React Application</h1>
    <Main
      numberOfOffers={numberOfOffers}
      onMainTitleClick={onMainTitleClick}
    />
    <OffersList
      offers={offers}
      onHoverPlaceCard={onHoverPlaceCard}
    />
  </div>;
};

App.propTypes = {
  numberOfOffers: PropTypes.number.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
