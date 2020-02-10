import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main/main.jsx";
// import App from "./components/app/app";

const names = [
  {
    title: `Beautiful & luxurious apartment at great location`
  },
  {
    title: `Wood and stone place`
  }
];

const offers = 3;

const onMainTitleClick = () =>{
  console.log(`Title was clicked`)
};

ReactDOM.render(
    <Main
      names={names}
      offers={offers}
      onMainTitleClick={onMainTitleClick}
    />,
    document.getElementById(`root`)
);
