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
        getOnlineFriends: () => {
            return axios.get(`/friends-online`);
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
        getErrands: (user) => {
            return axios.get(`/profile-errands?username=${user}`);
        },

        sendErrand: (username, value) => {
            return axios.post(`/profile/send-errand`, { username: username, value: value });
        }
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
        sendUpdateSocialMedia: (instagram, imgur, vsco, twitter, link) => {
            return axios.post(`/user_socialmedia`, { instagram: instagram, imgur: imgur, vsco: vsco, twitter: twitter, link: link })
        },
        getUserSettings: () => {
            return axios.get(`/user_settings`);
        },
        getUserSocialMedia: () => {
            return axios.get(`/get_user_socialmedia`);
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

    photos: {
        getCommunityPhotos: () => {
            return axios.get(`/get_photos?type=usergallery`);
        },
        getYoursPhotos: (username) => {
            return axios.get(`/get_photos?type=usergallery&username=${username}`);
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
        },

        getPayment: () => {
            return axios.post(`http://localhost/payment.php`, { pix: true });
        },

        statusPayment: {
            insertPaymentStatus: (idPayment, userId, status, type) => {
                return axios.post(`/save-payment`, { idPayment: idPayment, userId: userId, status: status, type: type });
            },
            approvedStatus: (idPayment, type, userId) => {
                return axios.post(`/approved-payment`, { idPayment: idPayment, type: type, userId: userId });
            },
            rejectedStatus: (idPayment, userId) => {
                return axios.post(`/rejected-payment`, { idPayment: idPayment, userId: userId })
            },
            cancelledStatus: (idPayment, userId) => {
                return axios.post(`/cancelled-payment`, { idPayment: idPayment, userId: userId })
            }
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
