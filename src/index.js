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
    this.state = { username: '' };
  }
  formChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render () {
      return (
          <div className="container">
              <div className="form-input">
                  <h1>Form</h1>
                  <form>
                    <label>Name:
                      <input type="text" onChange={this.formChangeHandler}/>
                    </label>

                  </form>
              </div>
              <div className="form-output">
                  <h1>Output</h1>
                  <p><strong>Name:</strong> {this.state.username}</p>
              </div>
          </div>
      )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));