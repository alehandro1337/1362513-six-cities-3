import React from "react";
import Main from "../main/main";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offers} = props;

  return <div>
    <h1>React Application</h1>
    <Main
      offers={offers}
    />
  </div>;
};

export default App;
