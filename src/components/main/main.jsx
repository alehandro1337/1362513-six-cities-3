import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

const Main = ({offers, numberOfOffers, onMainTitleClick}) => {
  return <React.Fragment>
    <h1
      onClick={onMainTitleClick}
      className="main-title"
    >
      Количество предложений: {numberOfOffers}
    </h1>
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => (
        <PlaceCard
          offers={offers}
          key={index}
        ></PlaceCard>
      ))}
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  numberOfOffers: PropTypes.number.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default Main;
