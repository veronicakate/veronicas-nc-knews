import { ReactComponent } from "*.svg";
import { navigate } from '@reach/router'

class NewArticleForm extends ReactComponent= () => {
  state = {
    title: '',
    body: '',
    author: 'jessjelly',
    slug: 'coding'//maybe topic
  };
  render() {
  return <div>
    <textarea onChange={(e) => this.handleChange('body', e.target.value)} 
    value={body}/>
    <button>Create my article</button>
  </div>
}
}

handleChange = (key, value) => {
  this.setState({ [key]: value})
}

handleSubmit = e => {
  e.preventDefault()
  //clicked, stop more clicking, when you quickly click twice it provides same article twice
  submitArticle(this.state).then(article => {
    navigate(`/articles/${article.article_id}`, {state: {new: true}})
    //key of state and object of whatever i like.
    //generally when you recieve data you put in state
    //in this case we are going to navigate to another page
    //navigate state different to react state- refers to browser history state
    //article.article id comes from data you get back. 
  })
}

//need to know body/title/topic to attach it to
//need user- based on whos logged in

export default NewArticleForm