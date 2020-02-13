import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const names = [
  {
    title: `Name One`
  },
  {
    title: `Name Two`
  }
];

it(`A title was clicked`, () =>{
  const onMainTitleClick = jest.fn();

  const main = mount(
      <App
        names={names}
        offers={3}
        onMainTitleClick={onMainTitleClick}
      />
  );

  const mainTitle = main.find(`h1.main-title`);

  mainTitle.props().onClick();

  expect(onMainTitleClick.mock.calls.length).toBe(1);
});
