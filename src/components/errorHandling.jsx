import React from "react";

const ShowError = ({ location = {} }) => {
  //PROPS.LOCATION.STATE- on this path
  return (
    <div>
      {location.state ? <h1> oops {location.state.status}</h1> : <h1 />}
      {location.state && <p> {location.state.from} not found</p>}
    </div>
  );
};

export default ShowError;
