import React from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import LoginBox from "./components/LoginBox";

class App extends Component {
  state = {
    loggedInUser: ""
  };
  render() {
    // const { articles, loading } = this.state;
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={this.logInUser} path="/" />
        <Router>
          <Articles />
          <SingleArticle path="/articles/:articleid" />
          <NewArticleForm path="/new-article" />
          //click on new article
          <NotFound default />
        </Router>
      </div>
    );
  }
  // loggedInUser={loggedInUser} path="/articles" />
  logInUser = username => {
    this.setState({ loggedInUser: username });
  };
}

export default App;
