import React from "react";
import PropTypes from "prop-types";

const Main = ({numberOfOffers, onMainTitleClick}) => {
  return <React.Fragment>
    <h1
      onClick={onMainTitleClick}
      className="main-title"
    >
      Количество предложений: {numberOfOffers}
    </h1>
  </React.Fragment>;
};

Main.propTypes = {
  numberOfOffers: PropTypes.number.isRequired,
  onMainTitleClick: PropTypes.func.isRequired
};

export default Main;
