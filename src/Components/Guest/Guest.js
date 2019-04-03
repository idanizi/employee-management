import React, { Component } from "react";
import './Guest.css';

export class Guest extends Component {

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.loginHandler();
    }

    render() {
        const {usernameChangedHandler} = this.props;

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