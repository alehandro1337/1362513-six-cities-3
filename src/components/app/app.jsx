import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({offers, numberOfOffers, onMainTitleClick}) => {
  return <div>
    <h1>React Application</h1>
    <Main
      numberOfOffers={numberOfOffers}
      offers={offers}
      onMainTitleClick={onMainTitleClick}
    />
  </div>;
};

App.propTypes = {
  numberOfOffers: PropTypes.number.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
