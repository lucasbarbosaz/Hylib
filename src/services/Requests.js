import axios from 'axios';

const Requests = {

    index: {
        getFigureUsername: (identification) => {
            return axios.post(`/look`, { identification });
        },
        submitLogin: (identification, password) => {
            return axios.post(`/login-user`, { identification, password });
        },
        submitPin: (loginPin) => {
            return axios.post(`/user_login_pin`, { access_code: loginPin })
        },
        getNewsIndex: () => {
            return axios.get(`/news-index`);
        },

        recoveryPassword: (email) => {
            return axios.post(`/recovery_account`, { email });
        }
    },

    register: {
        check: {
            validateUsername: (value) => {
                return axios.post(`/check`, { action: 'username', value });
            },
            validateMail: (value) => {
                return axios.post(`/check`, { action: 'email', value });
            },
            validatePassword: (value) => {
                return axios.post(`/check`, { action: 'password', value });
            }
        },
        registerUser: (newUser) => {
            return axios.post(`/user-register`, newUser);
        }
    },

    home: {
        getUser: () => {
            return axios.get(`/user-me`);
        },
        getRichestUsers: () => {
            return axios.get(`/richest-users`);
        },
        getFeaturedGroups: () => {
            return axios.get(`/featured-groups`);
        },
        getNews: () => {
            return axios.get(`/articles-me`);
        },
        getNewsSlider: () => {
            return axios.get(`/articles-slider-text`);
        },
        getEvents: () => {
            return axios.get(`/get-events`);
        },
        getActivity: () => {
            return axios.get(`/get-activity`);
        }
    },

    client: {
        flash: {
            sendToken: (token, sso) => {
                return axios.get(`/user_token_id`, { params: { token: token, sso: sso } });
            }
        },
        beta: {
            sendToken: (token, sso) => {
                return axios.get(`/user_token_id`, { params: { token: token, sso: sso } });
            }
        }
    },

    profile: {
        getPlayerData: (users) => {
            return axios.get(`/profile-user-data?username=${users}`);
        },
        getDataCount: (user) => {
            return axios.get(`/profile-count-data?username=${user}`);
        },
        getBadgesUsed: (user) => {
            return axios.get(`/profile-badgesused?username=${user}`);
        },
        getAllBadges: (user) => {
            return axios.get(`/profile-allbadges?username=${user}`);
        },
        getRooms: (user) => {
            return axios.get(`/profile-rooms?username=${user}`);
        },
        getGroups: (user) => {
            return axios.get(`/profile-groups?username=${user}`);
        },
    },

    settings: {
        sendUpdateAccount: (newUserSettings) => {
            return axios.post(`/user_settings_update`, newUserSettings);
        },
        sendUpdateEmail: (email) => {
            return axios.post(`/user_email_update`, { email });
        },
        sendUpdatePassword: (oldPassword, newPassword, newPasswordRepeated) => {
            return axios.post(`/user_password_update`, { old_password: oldPassword, new_password: newPassword, new_password_repeat: newPasswordRepeated });
        },
        getUserSettings: () => {
            return axios.get(`/user_settings`);
        }
    },

    hall: {
        getCredits: () => {
            return axios.get(`/hall/credits`);
        },
        getDiamonds: () => {
            return axios.get(`/hall/diamonds`);
        },
        getDuckets: () => {
            return axios.get(`/hall/duckets`);
        },
        getEvents: () => {
            return axios.get(`/hall/events`);
        },
        getPromo: () => {
            return axios.get(`/hall/promo`);
        }
    },

    vip: {
        getPlansVIP: () => {
            return axios.get(`/plans-vip`);
        },
        getPlansStars: () => {
            return axios.get(`/plans-stars`);
        },
        getPlansDiamonds: () => {
            return axios.get(`/plans-diamonds`);
        },
        getPlansDuckets: () => {
            return axios.get(`/plans-duckets`);
        }
    },

    recoveryPassword: {
        getResetKey: (resetKey) => {
            return axios.post(`/get_reset_key`, { resetKey });
        },
        sendRequestNewPassword: (resetKey, password, passwordRepeat) => {
            return axios.post(`/send_reset_password`, { resetKey, password, passwordRepeat });
        }
    },

    staff: {
        getStaffs: () => {
            return axios.get(`/staffs`);
        },
        getColab: () => {
            return axios.get(`/colabs`);
        },
    }
};

export default Requests;
