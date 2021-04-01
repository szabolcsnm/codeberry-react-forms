// Default content comes with create-react-app
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstname: 'Babin',
      lastname: 'Kuk',
      email: 'babinkuk@gmail.com',
      password: '******'
  };

  }
  formChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        [name]: value
      });

  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    alert("We are submitting!");
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    });
  }

  render () {
      return (
          <div className="container">
              <div className="form-input">
                  <h1>Form</h1>
                  <form onSubmit={this.formSubmitHandler}>
                    <label>First Name:
                      <input type="text" name="firstname" value={this.state.firstname} onChange={this.formChangeHandler}/>
                    </label><br/>
                    <label>Last Name:
                      <input type="text" name="lastname" value={this.state.lastname} onChange={this.formChangeHandler}/>
                    </label><br/>
                    <label> E-mail:
                      <input type="text" name="email" value={this.state.email} onChange={this.formChangeHandler}/>
                    </label><br/>
                    <label>Password:
                      <input type="text" name="password" value={this.state.password} onChange={this.formChangeHandler}/>
                      <input type="submit"/>
                    </label>
                  </form>
              </div>
              <div className="form-output">
                  <h1>Output</h1>
                  <p><strong>First Name:</strong> {this.state.firstname}</p>
                  <p><strong>Last Name:</strong> {this.state.lastname}</p>
                  <p><strong>E-mail:</strong> {this.state.email}</p>
                  <p><strong>Password:</strong> {this.state.password}</p>
              </div>
          </div>
      )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));