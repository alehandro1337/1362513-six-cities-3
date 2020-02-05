import React from "react";
import Main from "./Main";

const App = (props) => {
  const {offers} = props;

  return <div>
    <h1>React Application</h1>
    <Main
      offers={offers}
    />
  </div>;
}

export default App;
