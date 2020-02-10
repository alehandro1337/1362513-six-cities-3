import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const names = [
  {
    title: `Name One`
  },
  {
    title: `Name Two`
  }
];

const offers = 3;

it(`<Main /> should renderer 3`, () =>{
  const tree = renderer
    .create(<Main
      names={names}
      offers={offers}
      onMainTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
