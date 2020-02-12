import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const names = [
  {
    title: `Name One`
  },
  {
    title: `Name Two`
  }
];

const offers = 3;

it(`<App /> should renderer 3`, () =>{
  const tree = renderer
    .create(<App
      names={names}
      offers={offers}
      onMainTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
