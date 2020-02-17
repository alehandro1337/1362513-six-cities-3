import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";

const OffersList = (props) => {
  const {offers, onHoverPlaceCard} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => (
        <PlaceCard
          key={index}
          title={offer.title}
          price={offer.price}
          photo={offer.photo}
          type={offer.type}
          onHoverPlaceCard={onHoverPlaceCard}
        ></PlaceCard>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ).isRequired
};

export default OffersList;
