import React, { Component } from "react";
import './Guest.css';
import UserContext from "../../contexts/user-context";

export class Guest extends Component {

    static contextType = UserContext;

    handleSubmit(evt) {
        evt.preventDefault();
        this.context.loginHandler();
    }

    render() {

        const {usernameChangedHandler} = this.context;

        return (
            <div className="container">
                <h1>Welcome to MyWorkStatus</h1>
                <div className="input-group">
                    <form onSubmit={evt => this.handleSubmit(evt)}>
                        <input type="text"
                            className="input-txt"
                            placeholder="My Username..."
                            onChange={(evt) => usernameChangedHandler(evt.target.value)} />

                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}