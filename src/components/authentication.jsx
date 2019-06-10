// import React, {Component} from 'react'

// class Auth extends Component {
//   state = { username: '', hasError: false}

// render() {
//   const {user, children} = this.props
//   const {username, hasError} = this.state
//   if (user && user.username) return children;
//   return (
//     <div>
//       <form onSubmit={this.handleSubmit}>
//         <label> Username:</label>
//         <input onChange={this.handleChange} value={username} />
//         <button type="submit"> Login </button>
//         </form>
       
//           </div>
//   )
// }
// handleChange = e => {
//   const {value} = e.target;
//   this.setState({ username: value, error:null})
// }

// handleSubmit = e => {
//   e.preventDefault();
//   const {login} = this.props;
//   const {username, error} = this.state;
//   login(username).then(() => {
//     this.setState({ username: ''})
//   }).catch(() => {
//     this.setState({error, hasError: true, username: ''})
//   })
// }
// }

// export default Auth;