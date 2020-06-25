import React from 'react';
import UserContext from '../UserContext';

class login extends React.Component {
    static contextType = UserContext;

    render() {
        const { handleLoginSubmit } = this.context
        return (
            <form className="login-form">
                <h2 className='page-header'>Login</h2>
                <label htmlFor="username-input" className='username-input-label input-label'>Username</label>
                <input type="text" name="username-input" className='username-input input' />

                <label htmlFor="password-input" className='password-input-label input-label'>Password</label>
                <input type="text" name="password-input" className='password-input input' />

                <button className='login-submit' onClick={handleLoginSubmit}>Login</button>
            </form>
        )
    }

};

export default login;