import React from "react";
import PropTypes from "prop-types";

const Main = ({names, offers, onMainTitleClick}) => {
  return <React.Fragment>
    <h1
      onClick={onMainTitleClick}
      className="main-title"
    >
      Количество предложений: {offers}
    </h1>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name.title}</li>
      ))}
    </ul>
  </React.Fragment>;
};

Main.propTypes = {
  offers: PropTypes.number.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default Main;
