import React from 'react';

function signup(props) {
    return (
        <form class="signup-form">
            <h2 className='page-header'>Create New Account</h2>
            <label for="username-input" className='username-input-label input-label'>New Username</label>
            <input type="text" name="username-input" className='username-input input'/>

            <label for="password-input" className='password-input-label input-label'>New Password</label>
            <input type="text" name="password-input" className='password-input input'/>

            <label for="retype-password-input" className='retype-password-input-label input-label'>Retype Password</label>
            <input type="text" name="retype-password-input" className='retype-password-input input'/>

            <button className='signup-submit'>Submit</button>
        </form>
    );
};

export default signup;