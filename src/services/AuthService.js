import axios from 'axios';
import jwt_decode from 'jwt-decode';

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

    isTokenExpiredByTimestamp(token) {
        try {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;

            return decodedToken.exp < currentTime;
        } catch (error) {
            return true;
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