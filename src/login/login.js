import React from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import UserContext from '../UserContext';

class login extends React.Component {
    static contextType = UserContext;
    state = {
        error: null,
    }

    handleSubmitJwtAuth = event => {
        const { getAllComics, setCurrentUser } = this.context
        event.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = event.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                
                user_name.value = ''
                password.value = ''
                setCurrentUser(res.user_id)
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/home')
                getAllComics()
                
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                <h2 className='page-header'>Login</h2>
                <label htmlFor="username-input" className='username-input-label input-label'>Username</label>
                <input type="text" name="user_name" id='username-input' className='username-input input' />

                <label htmlFor="password-input" className='password-input-label input-label'>Password</label>
                <input type="text" name="password" id='password-input' className='password-input input' />

                <button className='login-submit' type='submit'>Login</button>
            </form>
        )
    }

};

export default login;