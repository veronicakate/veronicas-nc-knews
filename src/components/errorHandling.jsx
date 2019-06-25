import React from "react";
import { Link } from "@reach/router";

const ShowError = props => {
  const { err } = props;
  if (!err) return <h3> 404- Sorry page has not been found</h3>;
  return <h2>{`${err.status} - ${err.msg}`}</h2>;
  // return (
  //   <div>
  //     <h2>oops!</h2>
  //     {error ? (
  //       <p>
  //         Error: {error.response.status} {error.response.statusText}
  //       </p>
  //     ) : (
  //       <h2> 404 </h2>
  //     )}
  //     <button>
  //       <Link to="/"> Go Home</Link>
  //     </button>
  //   </div>
  // );
};

// export default ShowError;
// catchErrors(error, info) {
//   this.setState({ error: true });
// }
export default ShowError;
