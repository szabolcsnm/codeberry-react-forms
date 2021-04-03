// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import Form from "../src/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Babin',
      lastName: 'Kuk',
      email: 'babinkuk@gmail.com',
      password: '******'
    };
  }

  updateState = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  clearState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <Form
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        password={this.state.password}
        updateState={this.updateState}
        clearState={this.clearState}
      />
    );
  }
}

export default App;
