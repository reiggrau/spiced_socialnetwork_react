import React from "react";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    inputChange(e) {
        console.log("inputChange()");
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm(e) {
        e.preventDefault();
        console.log("submitForm(). this.state:", this.state);

        fetch("/register", {
            method: "POST",
        });
    }

    render() {
        return (
            <div className="formMenu">
                <h2>Registration</h2>
                <p>
                    Already a member?:
                    <Link to="/"> Sign in</Link>
                </p>
                <p className="error-message">{this.state.errorMessage}</p>
                <form onSubmit={this.formSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={this.inputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        onChange={this.inputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={this.inputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.inputChange}
                    />
                    <button onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        );
    }
}
