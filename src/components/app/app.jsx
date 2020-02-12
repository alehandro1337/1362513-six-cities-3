import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({names, offers, onMainTitleClick}) => {
  return <div>
    <h1>React Application</h1>
    <Main
      offers={offers}
      names={names}
      onMainTitleClick={onMainTitleClick}
    />
  </div>;
};

App.propTypes = {
  offers: PropTypes.number.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
