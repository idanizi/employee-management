import React, { Component } from "react";
import './Guest.css';

export class Guest extends Component {

    handleSubmit(evt) {
        let username = evt.target.value;
        this.props.usernameChangeHandler(username);
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to MyWorkStatus</h1>
                <div className="input-group">
                    <input type="text"
                        className="input-txt"
                        onSubmit={evt => this.handleSubmit(evt)}
                        placeholder="My Username..." />

                    <button className="login-btn">Login</button>
                </div>
            </div>
        );
    }
}