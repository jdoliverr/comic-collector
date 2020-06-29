import config from '../config'

const AuthApiService = {
    postLogin(credentials) {
        console.log(credentials)
        console.log(`${config.API_ENDPOINT}/auth/login`)
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()

            })
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default AuthApiService