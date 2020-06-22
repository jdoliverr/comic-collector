import React from 'react';

function login(props) {
    console.log('login');
    return (
        <form class="login-form">
            <h2 className='page-header'>Login</h2>
            <label for="username-input" className='username-input-label input-label'>Username</label>
            <input type="text" name="username-input" className='username-input input'/>

            <label for="password-input" className='password-input-label input-label'>Password</label>
            <input type="text" name="password-input" className='password-input input'/>

            <button className='login-submit'>Login</button>
        </form>
    )
};

export default login;