import React from "react";

const Main = (props) => {
  const {offers = '5'} = props;

  return <div>
    <p>number of offers {offers}</p>
  </div>;
}

export default Main;
