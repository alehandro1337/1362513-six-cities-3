import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offers = `5`} = props;

  return <div>
    <p>number of offers {offers}</p>
  </div>;
};

export default Main;
