import React from "react";
import PropTypes from "prop-types";

const Main = ({names, offers}) => {
  return <React.Fragment>
    <h1>Количество предложений: {offers}</h1>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name.title}</li>
      ))}
    </ul>
  </React.Fragment>;
};

Main.propTypes = {
  offers: PropTypes.number.isRequired,
  names: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default Main;
