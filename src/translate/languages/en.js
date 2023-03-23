const messages = {
    en: {
        translations: {
            header: {
                dropdown: {
                    me: {
                        home: 'My Page',
                        profile: 'My Profile',
                        settings: 'Settings',
                        logout: 'Logout',
                    },
                    news: 'Journalism',
                    community: {
                        title: 'Community',
                        halloffame: 'Hall of Fame',
                        staff: 'Staff',
                    },
                    shop: 'Shop',
                    housekeeping: 'Control Panel',
                },
            },

            index: {
                header: 'Hello, great to see you here, we currently have a lot of users online, how about joining them all and enjoying what we have prepared for you?',
                login: {
                    title: 'Login Area',
                    smallText: 'Login to play with us!',

                    forgetPassword: 'I forgot my password',

                    placeholders: {
                        loginInput: 'Username...',
                        passwordInput: 'You password...',
                    },
                },

                pin: {
                    title: 'Enter your PIN',
                    smallText: 'Check your email and copy your access code.',

                    placeholders: {
                        pinInput: 'Enter your PIN...',
                    },

                    pinButton: 'Verify',
                },

                recover: {
                    title: 'Recover account',
                    smallText:
                        'Recover your account here by informing the email that registered it.',

                    placeholders: {
                        recoverInput: 'Write your email',
                    },
                    recoverButton: 'Recover',
                    buttonBack: 'Return',
                },

                registerAnnouncement: {
                    title: 'WELCOME!',
                    subtitle:
                        "it's an amazing pixel world where you can design and build rooms the way you want and have fun with your friends through community games.",
                    smallText:
                        "Don't waste time, register right now and come live a pleasant experience, or not, here at",
                },

                featuredUser: {
                    title: 'No highlight..',
                    smallText: 'No event featured users were featured this month.',
                },

                buttons: {
                    login: 'Enter',
                    createAccount: 'Register now',
                },
            },

            register: {
                title: 'Register now',
                smallText: 'Join us today!',

                usernameInput: {
                    details:
                        "Choose your username wisely, we don't tolerate vulgarity in usernames!",

                    requirements:
                        'And your name, too, must have between 4 and 15 letters and no special characters.',
                    placeholder: 'Username...',
                },

                emailInput: {
                    requirements:
                        'Make sure you use a valid and true email, as if necessary to recover passwords, contact us and, among others, we will contact you through it.',
                    placeholder: 'Email address',
                },

                passwordInput: {
                    requirements:
                        'Security is never too much! Use a secure password that is easy for you to remember, another option is to accept password suggestions through your own browser, the password is saved in it when you log in, making it easier and making you safer.',
                    placeholder: '********',
                },

                gender: {
                    requirements:
                        'In addition to being mandatory, the choice of gender is essential so that when registering you can receive nice gifts, in addition to also identifying your gender according to your choice.',

                    female: 'Women',
                    male: 'Male',
                },

                registerPreview: {
                    title: 'Your name here!',
                    smallText: 'Shall we board?',
                },

                buttons: {
                    createAccount: 'Lets go!',
                },

                aboutHotel: {
                    title: 'Come meet the',
                    firstDescription:
                        'is a virtual pixel community where you can create your own avatar, make lots of friends, chat with different users of our hotel, build and decorate your own rooms, create your own games or play those of other users and many more.',
                    secondDescription:
                        'Creativity and originality are very welcome at our hotel! Every week we have several new competitions for you to participate in. From bedroom competitions, cool activities where you can express all your artistic and creative gifts and, to top it off, earn achievements and prizes! Did you hit the inspiration? Check out our news for the latest activities and competitions of the week!',
                    threeDescription:
                        'Do you love chatting and meeting your friends? our Groups, Forums and RPG communities are great options for you. Join the army and assume your duties, set up your own school and decide for yourself what to study, and rock the catwalk or rush to the emergency room and start saving pixelated lives.',
                },
            },

            home: {

                alert: {
                    title: 'Notice',
                    showMore: 'Show more',
                    seeLess: 'See less'
                },

                userDetails: {
                    vip: 'You are VIP!',

                    buttons: {
                        enter: 'Enter the Hotel',
                        flash: 'Enter old version',
                        beta: 'Enter the NEW version',
                    },
                },

                events: {
                    title: 'No events at the moment',
                    smallText: 'Opps... we havent added an event yet.',
                },

                activitys: {
                    title: 'No activity at the moment',
                    smallText: 'Opps.. for now we havent added an activity.',
                },

                richestPlayers: {
                    title: 'Rich Users',

                    currencys: {
                        type: {
                            credits: 'credits',
                            diamonds: 'diamonds',
                            duckets: 'duckets',
                        },
                    },
                },

                featuredGroup: {
                    title: 'Featured groups',
                    members: 'members',
                },

                downloadApp: {
                    title: 'Download the app from',

                    downloads: {
                        windows: 'Download for Windows',
                        macOS: 'Download for MacOS',
                    },
                },

                socialNetworks: {
                    title: 'More accessibility for you!',

                    instagram: 'Page on Instagram',
                    twitter: 'Follow us on Twitter',
                    discord: 'Server on Discord',
                },
            },

            profile: {
                userNotFound: 'User does not exist.',

                searchInput: {
                    placeholder: 'Search user profile',
                },

                buttons: {
                    searchUser: 'Search',
                },

                infos: {
                    online: 'Online',
                    offline: 'Offline',

                    isOwner: 'Owner and developer',
                    rank: 'User',
                    friendText: 'friends',

                    relationShips: {
                        others: 'Others...',
                    },

                    registeredIn: 'Registered in',
                },

                badges: {
                    ownerBadges: 'Badges of {{username}}',
                    countBadges: '{{count}} badges',
                },

                groups: {
                    title: 'Groups of {{username}}',
                    countGroups: '<text>{{count}}</text> of {{count2}} groups',
                },

                errands: {
                    title: 'Messages from {{username}}',
                    smallText: 'The errands that friends of {{username}} left here!',

                    errandsBox: {
                        title: 'It looks like {{username}} has no errands!',
                        smallText:
                            "You can't leave a message for now, but here are the messages your friends leave you! If any message contains anything offensive or that you don't like, you can delete it or, in more serious cases, report the person who left a message to our staff.",

                        habboway:
                            'Please take some time to read our <a className="bold">terms and conditions</a> to avoid penalties.',
                    },
                },

                rooms: {
                    title: '{{ownerRoom}} rooms',
                    countRooms: '<text>0</text> of {{count}} rooms',

                    roomsInfo: {
                        goTo: 'Visit',
                    },

                    userNoHasRoom: '{{username}} does not have any rooms.',
                },
            },

            settings: {
                othersPreferences: {
                    title: 'Other preferences',
                    smallText: 'See what else you can change in your account.',

                    generalPreferences: 'General preferences',
                    myMail: 'My email',
                    myPassword: 'My password',
                },

                generalSettings: {
                    title: 'Quick settings',
                    smallText: 'Here are some quick and essential settings you can change.',

                    motto: {
                        title: 'Your motto',
                        smallText: 'What are you thinking today?',

                        placeholder: 'Your motto here...',
                    },

                    friendRequests: {
                        title: 'Friend requests',
                        smallText: 'I want to receive friend requests from everyone.',
                    },

                    lastOnline: {
                        title: 'Last online',
                        smallText:
                            'Allow other users to see the last time you logged into the hotel?',
                    },

                    statusOnline: {
                        title: 'Online status',
                        smallText: 'Allow other users to see when you are online?',
                    },

                    copyFigure: {
                        title: 'Copy figure',
                        smallText: 'Allow other users to copy your look? (command :copy)',
                    },

                    followMe: {
                        title: 'Follow me',
                        smallText: 'Allow other users to follow you? (command :follow)',
                    },

                    trade: {
                        title: 'Trades',
                        smallText: 'Allow other users to trade with you?',
                    },

                    whisper: {
                        title: 'Whispers',
                        smallText: 'Allow other users to whisper with you?',
                    },

                    allowSex: {
                        title: 'Sex',
                        smallText: 'Allow other users to use the :sex command with you?',
                    },

                    mentions: {
                        title: 'Mentions',
                        smallText: 'Who can use to mention you?',

                        types: {
                            friends: 'Friends',
                            everyone: 'Everyone',
                            nobody: 'Nobody',
                        },
                    },

                    button: 'Save changes',
                    success: 'Preferences saved successfully!',
                },

                email: {
                    title: 'Change email',
                    smallText: 'Here you can change the email of your account.',

                    infos: {
                        title: 'Your email is very important!',
                        smallText:
                            'When changing your email, use a real email! Why? In case you forget your account password, we will surely need your email to reset it.',
                        smallText2:
                            'Dont worry, we dont send those annoying promotional emails or unnecessary things to your email.',
                    },

                    emailInput: {
                        newMail: 'New email',
                    },

                    button: 'Finish',
                    success: 'Email successfully changed!',
                },

                password: {
                    title: 'Change password',
                    smallText: 'Here you can change your account password.',

                    infos: {
                        title: 'ALWAYS CHOOSE A SECURE PASSWORD!',
                        smallText:
                            'Security is never too much! Therefore, when changing your password, preferably choose a secure password that you remember and that is different from the one you already use on other Habbo sites.',

                        smallText2:
                            'Never give anyone access to your account! By providing your password, we are not responsible for it, so it is your sole responsibility to compromise access to your account for others.',
                        smallText3:
                            'And never, under any circumstances, will a member of our staff request your password, and if they do, you must report it immediately to a higher-up.',
                    },

                    passwordInput: {
                        currentPassword: 'Current password',
                        newPassword: 'New password',
                        repeatPassword: 'Confirm your new password',

                        placeholders: {
                            currentPassword: 'Current password...',
                            newPassword: 'New password...',
                            repeatPassword: 'Confirm your new password...',
                        },
                    },
                    button: 'Finish',
                    success: 'Password changed successfully!',
                },
            },

            articles: {
                othersArticles: {
                    title: 'Other news',
                    smallText: 'Continue reading other news we have prepared for you.',
                },

                footerArticle: {
                    author: 'Published by:',
                    date: 'On',
                },

                comments: {
                    placeholders: {
                        writeComment: 'Type your comment here...',
                    },

                    commentOwner: 'By',
                    date: 'at',

                    button: 'Comment',

                    disabledComments: {
                        title: 'Better to comment on other peoples lives',
                        smallText:
                            'Because comments for this news have been disabled by the author.',
                    },
                },
            },

            hall: {
                pages: {
                    rich: 'Wealth',
                    other: 'Events and Promotions',
                },

                rich: {
                    currencys: {
                        credits: {
                            title: 'Credits',

                            txt1: 'for having',
                            txt2: 'credits',
                        },
                        diamonds: {
                            title: 'Diamonds',

                            txt1: 'for having',
                            txt2: 'diamonds',
                        },
                        duckets: {
                            title: 'Duckets',
                            txt1: 'for having',
                            txt2: 'duckets',
                        },
                    },
                },

                events_and_promotions: {
                    events: {
                        title: 'Events',

                        txt1: 'for winning',
                        txt2: 'events',
                    },

                    promotions: {
                        title: 'Promotions',

                        txt1: 'for winning',
                        txt2: 'promotions',
                    },
                },

                aboutHall:
                    'The Hall of Fame for points and promotions was created with the intention of promoting the best event players or those most committed to winning promotions where you have the chance to be among the 5 users who score the most points in events or who participated and won promotions!',
                aboutHall2:
                    'At the end of every month, this hall of fame is reset, thus giving a new chance for other people to appear here, not to mention that after being reset, the users who stayed on the podium (5 places) won prizes, such as rubies, gems, badges or even rares. Do not miss this chance and participate in events and win promotions to receive prizes and become famous!',

                button: 'Learn more',
            },

            staffs: {
                pages: {
                    staff: 'Staff',
                    gea: 'Gamers in Action',
                    colab: 'Collaboration',
                },

                defaultMotto: 'I am part of the {{hotelName}} team!',
                noStaff: {
                    title: 'OH BOBBA?!',
                    smallText:
                        'It looks like no one is currently holding this position! But stay tuned for new opportunities, who knows, maybe you could take on this role.',
                },
            },

            shop: {
                pages: {
                    vip: 'VIP',
                    stars: 'Stars',
                    diamonds: 'Diamonds',
                    duckets: 'Duckets'
                },

                buttons: {
                    buy: 'Buy',
                    seeMore: 'See Benefits',
                    seeLess: 'Hide Benefits',
                    help: 'Help Tool'
                }
            },

            footer: {
                text: "<b>{{hotelName}}</b> 2009 - {{currentDate}} © All rights reserved.",
                text2: "Developed by",

                publicity: {
                    title: 'Third-party advertising',
                    smallText: 'Advertisements serve as a form of financial support to {{hotelName}}'
                },

                changeLanguage: 'Change Language',
                languages: {
                    pt: 'Portuguese',
                    en: 'English',
                    es: 'Spanish'
                }
            },
        },
    },
};

export { messages };

