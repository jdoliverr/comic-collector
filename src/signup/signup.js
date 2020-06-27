import React from 'react';
import UserContext from '../UserContext'

class signup extends React.Component {
    static contextType = UserContext;

    handleSignupSubmit = (event) => {
        event.preventDefault();
        this.setState({
            logged_in: true
        })
        this.props.history.push('/home');
    }

    render() {
        return (
            <form className="signup-form" onSubmit={this.handleSignupSubmit}>
                <h2 className='page-header'>Create New Account</h2>
                <label htmlFor="username-input" className='username-input-label input-label'>New Username</label>
                <input type="text" name="username-input" className='username-input input' />

                <label htmlFor="password-input" className='password-input-label input-label'>New Password</label>
                <input type="text" name="password-input" className='password-input input' />

                <label htmlFor="retype-password-input" className='retype-password-input-label input-label'>Retype Password</label>
                <input type="text" name="retype-password-input" className='retype-password-input input' />

                <button className='signup-submit' type='submit' >Submit</button>
            </form>
        );
    }

};

export default signup;