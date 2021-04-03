import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
    };
  
    formChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.props.updateState(name, value);
    };
  
    formSubmitHandler = (event) => {
        event.preventDefault();
        alert("We are submitting!");

        this.props.clearState();
    }
  
    render () {
        return (
            <div className="container">
                <div className="form-input">
                    <h1>Form</h1>
                    <form onSubmit={this.formSubmitHandler}>
                      <label>First Name:
                        <input type="text" name="firstname" value={this.props.firstName} onChange={this.formChangeHandler}/>
                      </label><br/>
                      <label>Last Name:
                        <input type="text" name="lastname" value={this.props.lastName} onChange={this.formChangeHandler}/>
                      </label><br/>
                      <label> E-mail:
                        <input type="text" name="email" value={this.props.email} onChange={this.formChangeHandler}/>
                      </label><br/>
                      <label>Password:
                        <input type="text" name="password" value={this.props.password} onChange={this.formChangeHandler}/>
                        <input type="submit"/>
                      </label>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p><strong>First Name:</strong> {this.props.firstName}</p>
                    <p><strong>Last Name:</strong> {this.props.lastName}</p>
                    <p><strong>E-mail:</strong> {this.props.email}</p>
                    <p><strong>Password:</strong> {this.props.password}</p>
                </div>
            </div>
        );
    }
}

export default Form;