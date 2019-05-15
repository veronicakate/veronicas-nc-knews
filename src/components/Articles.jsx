import React, { Component } from "react";
import Axios from "axios";
import { getArticles } from "../api";
import { Router, Link } from "@reach/router";

// export default class Articles extends Component {
//   state = {
//     articles: [],
//     loading: true
//   };
//   componentDidMount() {
//     getArticles().then(articles => {
//       this.setState({ articles, loading: false });
//     });

//     return {
//       render() {
//         const { articles, loading } = this.state;
//         return loading ? <p>loading...</p> : <button>hiya</button>;
//       }
//     };
//   }
// }

export default function Articles({ articles }) {
  //console.log(student);
  return articles ? (
    <div>
      <Link to={`/articles/${articles._id}`}>
        {" "}
        <h1>{articles}</h1>
      </Link>
    </div>
  ) : null;
}

// getAuthorArticles = () => {
//   getArticles({ author: jessjelly }).then(articles => {
//     this.setState();
//   });
// };
