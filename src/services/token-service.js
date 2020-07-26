import config from '../config';

// service object with helper functions for handling tokens
const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token);
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY);
    },
    clearId() {
        window.localStorage.removeItem('id');
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken();
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`);
    },
};

export default TokenService;