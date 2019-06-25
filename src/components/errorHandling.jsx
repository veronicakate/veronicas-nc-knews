import React from "react";
import { Link } from "@reach/router";

const ShowError = props => {
  const { err } = props;
  if (!err) return <h3> 404 - Sorry page has not been found!</h3>;
  return <h2>{`${err.status} - ${err.msg}`}</h2>;
};
export default ShowError;
