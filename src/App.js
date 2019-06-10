import React, { Component } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import Comments from "./components/Comments";
import LoginBox from "./components/LoginBox";
import SingleArticle from "./components/SingleArticle";
import NewArticleForm from "./components/newArticleForm";
import ArticleList from "./components/Article.list";
import Axios from "axios";
import DropdownPage from "./components/DropDownBar";
import Topics from "./components/Topics";
import { getTopics } from "./api";
import Navigation from "./components/navigation";
import CommentForm from "./components/CommentForm";
import Auth from "./components/authentication"
import {getUser} from "./api"

class App extends Component {
  state = {
    articleList: [],
    loggedInUser: "",
    error: false,
    topics: [],
    body: ""
  };

  render() {
    console.log(this.state.loggedInUser);
    const { articles, loading } = this.state;
    const { loggedInUser, topics } = this.state;

    return (
      <div className="App">
        <Header path="/" />
{/* <Auth user={loggedInUser} login={this.signInUser} /> */}
        <LoginBox
          path="/"
          loggedInUser={loggedInUser}
          logInUser={this.signInUser}
          isLoggedIn={this.state.isLoggedIn}
          signout={this.logOut}
        />
        <Router>
          <Articles logInUser={this.signInUser} topics={topics} path="/" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
          {/* <Topics
            path="/articles/topics"
            topics={topics}
            loggedInUser={loggedInUser}
          /> */}
        </Router>
        
      </div>
    );
  }

  componentDidMount() {
    const url = "https://bencnews.herokuapp.com/api/articles";
    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articleList: articles });
    });
  }
  signInUser = username => {
this.setState({ loggedInUser: username });
    
  };
  componentDidUpdate(){
    this.handleSave()
  }
  handleSave = () => {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  logOut = () => {
    this.setState({ loggedInUser: "" });
  };
}

export default App;

//<ArticleList path="/articles" articleList={this.state.articleList} />
