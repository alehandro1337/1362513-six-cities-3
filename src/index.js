import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main/main";
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

ReactDOM.render(
    <Main
      names={names}
      offers={offers}
    />,
    document.getElementById(`root`)
);
