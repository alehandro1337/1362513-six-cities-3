import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

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
  return (`Title was clicked`);
};

ReactDOM.render(
    <App
      names={names}
      offers={offers}
      onMainTitleClick={onMainTitleClick}
    />,
    document.getElementById(`root`)
);
