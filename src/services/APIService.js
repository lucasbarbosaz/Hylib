class APIService {

    isResponseAuthorized(response) {
        let isUnauthorized = response.data.error === true && response.data.status_code === 401;
        if (isUnauthorized) {
            window.location = '/logout';
            return false;
        } else {
            return true;
        }
    }

}
export default new APIService()