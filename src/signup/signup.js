import React from 'react';
import UserContext from '../UserContext';
import AuthApiService from '../services/auth-api-service';

class signup extends React.Component {
    static contextType = UserContext;
    state = {
        error: null
    }

    handleSignupSubmit = (event) => {
        event.preventDefault();
        this.setState({
            logged_in: true
        })
        AuthApiService.postUser({
            user_name: event.target.user_name.value,
            password: event.target.password.value,
        })
            .then(user => {
                event.target.user_name.value = ''
                event.target.password.value = ''
                this.props.onRegisterationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <form className="signup-form" onSubmit={this.handleSignupSubmit}>
                <h2 className='page-header'>Create New Account</h2>
                <label htmlFor="username-input" className='username-input-label input-label'>New Username</label>
                <input type="text" name="user_name" className='username-input input' required/>

                <label htmlFor="password-input" className='password-input-label input-label'>New Password</label>
                <input type="text" name="password" className='password-input input' minLength='8' maxLength='72' required/>

                {/* <label htmlFor="retype-password-input" className='retype-password-input-label input-label'>Retype Password</label>
                <input type="text" name="retype-password-input" className='retype-password-input input' /> */}

                <button className='signup-submit' type='submit' >Submit</button>
            </form>
        );
    }

};

export default signup;