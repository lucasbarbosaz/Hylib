import axios from 'axios';
import moment from 'moment';

export const TOKEN_ATTRIBUTE_NAME = 'token'
export const USER_ATTRIBUTE_NAME = 'user'
export const EXPIRATION_ATTRIBUTE_NAME = 'expiration'

class AuthService {

    isUserLoggedIn() {
        
        let token = localStorage.getItem(TOKEN_ATTRIBUTE_NAME);
        return token ? true : false;
    }

    getToken() {
        return localStorage.getItem(TOKEN_ATTRIBUTE_NAME)
    }

    isTokenExpired() {

        var now = moment().unix();
        var dayExpire = now + 86400; // 1 day

        let expiration = localStorage.getItem(EXPIRATION_ATTRIBUTE_NAME)

        if (expiration === null) {
            localStorage.setItem(EXPIRATION_ATTRIBUTE_NAME, dayExpire)
        } else {
            if (now >= expiration) {
                this.logout()
            }
        }
    }


    setupAxiosHeaders(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    logout() {
        localStorage.removeItem(TOKEN_ATTRIBUTE_NAME);
        localStorage.removeItem(USER_ATTRIBUTE_NAME);
        localStorage.removeItem(EXPIRATION_ATTRIBUTE_NAME);
        delete axios.defaults.headers.common['Authorization'];
    }

}
export default new AuthService()