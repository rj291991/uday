import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLogged: false,
            errorMsg:''


        }
    }

    handleLogin = (e) => {
        e.target.name == 'email' ? this.setState({ username: e.target.value }) : this.setState({ password: e.target.value })
    }
    handleSubmit = () => {
        if(this.state.username == 'rohit@gmail.com' && this.state.password == 'rohit@12345'){
            this.setState({ isLogged: true });
            sessionStorage.setItem('isLogged',this.state.isLogged);
            sessionStorage.setItem('username',this.state.username);
        } 
        else if(this.state.username == '' && this.state.password == ''){
            this.setState({errorMsg:'Please enter username & Password'})
        }
        else{
            this.setState({ isLogged: false });
            this.setState({errorMsg:'Incorrect Username & Password'})
        }

    }
    render() {
        const { isLogged } = this.state;
        return (
            <div>
            {sessionStorage.getItem('isLogged') != null? <Redirect to="/home" /> :                
                <form className="form-signin border mt-5">
                    <p style={{ 'color': 'red' }}>{this.state.errorMsg}</p>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    {/* For Email */}
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input name='email' type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus onChange={(e) => this.handleLogin(e)} />

                    {/* For Password */}
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input name='password' type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(e) => this.handleLogin(e)} />
                    <button className="btn btn-lg btn-primary btn-block" type="button" required onClick={this.handleSubmit}>Login</button>
                </form>
            }
            </div>
        )
    }
}

