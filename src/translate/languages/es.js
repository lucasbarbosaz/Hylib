const messages = {
    es: {
        translations: {
            header: {
                dropdown: {
                    me: {
                        home: 'Mi Página',
                        profile: 'Mi perfil',
                        settings: 'Configuración',
                        logout: 'Salir'
                    },
                    news: 'Noticias',
                    community: {
                        title: 'Comunidad',
                        halloffame: 'Salón de la Fama',
                        staff: 'Equipo',
                        photos: 'Fotos',
                        vips: 'Vips',
                    },
                    shop: 'Tienda',
                    housekeeping: 'Panel de control'
                }
            },

            index: {
                header: "Hola, qué bueno verte por aquí, actualmente tenemos muchos usuarios en línea, ¿qué tal si te unes a todos y disfrutas de lo que tenemos preparado para ti?",
                login: {
                    title: "Área de inicio de sesión",
                    smallText: "¡Inicia sesión para jugar con nosotras!",
                    smallTextReduced: "¡Inicie sesión para agregar una cuenta!",

                    placeholders: {
                        loginInput: "Nombre de usuario...",
                        passwordInput: "Tu contraseña..."
                    }
                },

                pin: {
                    title: 'Introduce tu PIN',
                    smallText: 'Revisa tu correo electrónico y copia tu código de acceso.',

                    forgetPassword: 'Olvide mi contraseña',

                    placeholders: {
                        pinInput: 'Introduce tu PIN...'
                    },

                    pinButton: 'Verificar'
                },

                recover: {
                    title: 'Recuperar cuenta',
                    smallText: 'Recupere su cuenta aquí informando el correo electrónico que la registró.',

                    placeholders: {
                        recoverInput: 'Escriba su correo electrónico'
                    },
                    recoverButton: 'Recuperar',
                    buttonBack: 'Volver'
                },

                registerAnnouncement: {
                    title: "¡BIENVENIDO!",
                    subtitle: "es un increíble mundo de píxeles donde puedes diseñar y construir habitaciones de la manera que quieras y divertirte con tus amigos a través de juegos comunitarios.",
                    smallText: "No pierdas tiempo, regístrate ahora mismo y ven a vivir una grata experiencia, o no, aquí en",
                },

                featuredUser: {
                    title: "Sin resaltar..",
                    smallText: "No se presentaron usuarios destacados de eventos este mes."
                },

                buttons: {
                    login: "Ingresar",
                    createAccount: "Regístrate ahora"
                }
            },

            register: {
                title: "Regístrate ahora",
                smallText: "¡Únete a nosotros hoy!",

                usernameInput: {
                    details: "Elija sabiamente su nombre de usuario, ¡no toleramos la vulgaridad en los nombres de usuario!",

                    requirements: "Y tu nombre también debe tener entre 4 y 15 letras y ningún carácter especial.",
                    placeholder: "Nombre de usuario..."
                },

                emailInput: {
                    requirements: "Asegúrese de utilizar un correo electrónico válido y veraz, ya que en caso de ser necesario para recuperar contraseñas, póngase en contacto con nosotros y, entre otros, nos pondremos en contacto con usted a través del mismo.",
                    placeholder: "Dirección de correo electrónico",
                },

                passwordInput: {
                    requirements: "¡La seguridad nunca está de más! Utilice una contraseña segura que sea fácil de recordar para usted, otra opción es aceptar sugerencias de contraseña a través de su propio navegador, la contraseña se guarda en él cuando inicia sesión, haciéndolo más fácil y haciéndolo más seguro.",
                    placeholder: "********",
                },

                gender: {
                    requirements: "Además de ser obligatorio, la elección del género es fundamental para que al registrarte puedas recibir lindos obsequios, además de identificar también tu género según tu elección.",

                    female: "Mujer",
                    male: "Masculino"
                },

                registerPreview: {
                    title: "¡Tu nombre aquí!",
                    smallText: "¿Embarcamos?"
                },

                buttons: {
                    createAccount: "¡Vamos!"
                },

                aboutHotel: {
                    title: "Ven a conocer el",
                    firstDescription: "es una comunidad virtual de píxeles donde puedes crear tu propio avatar, hacer muchos amigos, chatear con diferentes usuarios de nuestro hotel, construir y decorar tus propias habitaciones, crear tus propios juegos o jugar a los de otros usuarios y mucho más.",
                    secondDescription: "¡La creatividad y la originalidad son bienvenidas en nuestro hotel! Cada semana tenemos varios concursos nuevos para que participes. Desde concursos de dormitorio, actividades geniales donde puedes expresar todos tus dones artísticos y creativos y, para colmo, ¡ganar logros y premios! ¿Llegaste a la inspiración? ¡Echa un vistazo a nuestras noticias para conocer las últimas actividades y competiciones de la semana!",
                    threeDescription: "¿Te encanta chatear y conocer a tus amigos? nuestros grupos, foros y comunidades de juegos de rol son excelentes opciones para ti. Únete al ejército y asume tus deberes, establece tu propia escuela y decide por ti mismo qué estudiar, y arrasa en la pasarela o corre a la sala de emergencias y comienza a salvar vidas pixeladas.",
                }
            },

            home: {

                alert: {
                    title: 'Aviso',
                    showMore: 'Ver más',
                    seeLess: 'Ver menos'
                },

                userDetails: {
                    isVip: 'Eres <b>VIP</b>!',
                    notVip: 'No eres <b>VIP</b>!',

                    buttons: {
                        enter: 'Entrar en el Hotel',
                        flash: 'Ingrese la versión anterior',
                        beta: 'Entra en la NUEVA versión'
                    }
                },

                multipleAccounts: {
                    button: 'Cuentas',
                    title: 'CAMBIAR DE CUENTAS',
                    description: '¡Administra fácilmente tus múltiples cuentas en un solo lugar! Conéctate y cambia entre cuentas con comodidad para una experiencia personalizada. Navega sin esfuerzo entre tus cuentas con nuestra nueva función. <b>¡Pruébalo ahora!</b>',
                    currentAccount: 'Cuenta actual',
                    joinAccount: 'Ingresar como {{username}}',
                    close: 'Cerrar'
                },

                friendsOnline: {
                    title: 'Amigos en línea',
                    smallText: 'Tienes {{countMessage}} clic al lado para verlos.',
                    connectedFriendsPluralMessage: 'amigos conectados',
                    connectedFriendsSingularMessage: 'amigo conectado',
                    button: 'Ver amigos',
                },

                friendsOffline: {
                    title: 'Amigos en línea',
                    smallText: 'Opps... parece que no tienes amigos en línea en este momento, intenta agregar nuevas personas en el hotel.',
                },

                activitys: {
                    title: 'Sin actividad por el momento',
                    smallText: 'Opps... por ahora no hemos agregado una actividad.',
                },

                richestPlayers: {
                    title: 'Usuarios ricos',

                    currencys: {
                        type: {
                            credits: 'creditos',
                            diamonds: 'diamantes',
                            duckets: 'duckets'
                        }
                    }
                },

                featuredGroup: {
                    title: 'Grupos destacados',
                    members: 'miembros'
                },

                downloadApp: {
                    title: 'Descarga la aplicación',

                    downloads: {
                        windows: 'Descargar para Windows',
                        macOS: 'Descargar para MacOS'
                    }
                },

                socialNetworks: {
                    title: '¡Más accesibilidad para ti!',

                    facebook: 'Califica nuestra pagina',
                    instagram: 'Página en Instagram',
                    twitter: 'Síganos en Twitter',
                    discord: 'Servidor en Discord'
                },
            },

            profile: {
                userNotFound: 'El usuario no existe.',

                searchInput: {
                    placeholder: 'Buscar perfil de usuario',
                },

                buttons: {
                    searchUser: 'Buscar'
                },

                infos: {
                    online: 'Conectado',
                    offline: 'Offline',

                    isOwner: 'Propietario y desarrollador',
                    isDev: 'Hermoso y desarrollador',
                    friendText: 'amigos',

                    registeredIn: 'Registrado en',
                },

                badges: {
                    ownerBadges: 'Emblemas de {{username}}',
                    countBadges: '{{count}} emblemas'
                },

                groups: {
                    title: 'Grupos de {{username}}',
                    countGroups: '<text>{{count}}</text> de {{count2}} grupos'
                },

                errands: {
                    title: 'Recados de {{username}}',
                    smallText: 'Los mensajes que dejaron amigos de {{username}} aquí.',

                    placeholder: 'Envía tu mensaje a {{username}}.',

                    iNotHaveErrands: 'Parece que no tienes mensajes.',
                    notHaveErrands: 'Sé el primero en enviar un mensaje, ya que {{username}} no tiene mensajes.',

                    sendErrand: 'Enviar mensaje a <b>{{username}}</b>',
                    sendErrandMyself: 'No puedes dejar un mensaje para ti, ¡pero aquí están los mensajes que tus amigos te han dejado! Si algún mensaje contiene algo ofensivo o que no te gusta, denuncia a la persona que dejó el mensaje a nuestro equipo. Tómate un tiempo para leer nuestros términos y condiciones para evitar sanciones.',

                    sendErrandAreaNotFriends: '<h5><b>Tú</b> y <b>{{username}}</b> necesitan ser amigos para intercambiar mensajes.</h5>',

                    errandsBox: {
                        title: 'Parece que {{username}} no tiene mensajes.',
                        smallText: 'No puedes dejar un mensaje por ahora, ¡pero aquí están los mensajes que tus amigos te han dejado! Si algún mensaje contiene algo ofensivo o que no te gusta, puedes eliminarlo o, en casos más graves, denunciar a la persona que dejó un mensaje a nuestro equipo.',

                        habboway: 'Por favor, dedica un tiempo para leer nuestros <a className="bold" href="/habbo-way">términos y condiciones</a> para evitar penalizaciones.'
                    }
                },

                rooms: {
                    title: 'Habitaciones de {{ownerRoom}}',
                    countRooms: '<text>0</text> de {{count}} habitaciones',

                    roomsInfo: {
                        goTo: 'Visitar'
                    },

                    userNoHasRoom: '{{username}} no tiene ninguna habitación.'
                }
            },

            settings: {

                othersPreferences: {
                    title: 'Otras preferencias',
                    smallText: 'Vea qué más puede cambiar en su cuenta.',

                    generalPreferences: 'Preferencias generales',
                    myMail: 'Mi email',
                    myPassword: 'Mi contraseña',
                    changeTheme: 'Alterar tema'
                },

                generalSettings: {
                    title: 'Ajustes rápidos',
                    smallText: 'Aquí hay algunas configuraciones rápidas y esenciales que puede cambiar.',

                    motto: {
                        title: 'Tu mision',
                        smallText: 'en que estas pensando hoy',

                        placeholder: 'Tu misión aquí....'
                    },

                    friendRequests: {
                        title: 'Solicitudes de amistad',
                        smallText: 'Deseo recibir solicitudes de amistad de todos.'
                    },

                    lastOnline: {
                        title: 'Último inicio de sesión',
                        smallText: '¿Permitir que otros usuarios vean la última vez que ingresaste al hotel?',
                    },

                    statusOnline: {
                        title: 'Estado en línea',
                        smallText: '¿Permitir que otros usuarios vean cuando estás en línea?',
                    },

                    copyFigure: {
                        title: 'Copiar atuendo',
                        smallText: '¿Permitir que otros usuarios puedan copiar tu atuendo? (comando: :copy)'
                    },

                    followMe: {
                        title: 'Seguirme',
                        smallText: '¿Permitir que otros usuarios puedan seguirte? (comando: :follow)'
                    },

                    trade: {
                        title: 'Negociaciones',
                        smallText: '¿Permitir que otros usuarios puedan negociar contigo?'
                    },

                    whisper: {
                        title: 'Susurros',
                        smallText: '¿Permitir que otros usuarios puedan susurrarte?'
                    },

                    allowSex: {
                        title: 'Sexo',
                        smallText: '¿Permitir que otros usuarios usen el comando :sexo contigo?'
                    },

                    mentions: {
                        title: 'Menciones',
                        smallText: '¿Quién puede mencionarte?',

                        types: {
                            friends: 'Amigos',
                            everyone: 'Todos',
                            nobody: 'Nadie'
                        }
                    },

                    changeTheme: {
                        title: 'Cambiar tema',
                        smallText: 'Cambie al modo oscuro del sitio.'
                    },

                    button: 'Guardar cambios',
                    success: '¡Preferencias guardadas con éxito!',
                }
            },

            email: {
                title: 'Cambiar correo electrónico',
                smallText: 'Aquí puedes cambiar el correo electrónico de tu cuenta.',

                infos: {
                    title: '¡Tu correo electrónico es muy importante!',
                    smallText: 'Al cambiar tu correo electrónico, ¡utiliza un correo electrónico real! ¿Por qué? En caso de que olvides la contraseña de tu cuenta en algún momento, seguramente necesitaremos tu correo electrónico para hacer este proceso.',
                    smallText2: 'No te preocupes, no enviaremos correos electrónicos promocionales aburridos o cosas innecesarias a tu correo electrónico.'
                },

                emailInput: {
                    newMail: 'Nuevo correo electrónico'
                },

                button: 'Finalizar',
                success: '¡Correo electrónico cambiado con éxito!',
            },

            password: {
                title: 'Cambiar contraseña',
                smallText: 'Aquí puedes cambiar la contraseña de tu cuenta.',

                infos: {
                    title: '¡SIEMPRE ELIJA UNA CONTRASEÑA SEGURA!',
                    smallText: '¡La seguridad nunca es suficiente! Por lo tanto, al cambiar tu contraseña, es preferible elegir una contraseña segura, que puedas recordar y que también sea diferente de la que ya usas en otros Habbo.',

                    smallText2: '¡Nunca des acceso a tu cuenta a nadie! Al proporcionar tu contraseña, no nos hacemos responsables de ello; por lo tanto, es exclusivamente tu responsabilidad comprometer el acceso a tu cuenta para otras personas.',
                    smallText3: 'Y nunca, bajo ninguna circunstancia, un miembro de nuestro equipo solicitará tu contraseña y, si lo hace, debes informar inmediatamente a un miembro superior.'
                },

                passwordInput: {
                    currentPassword: 'Contraseña actual',
                    newPassword: 'Nueva contraseña',
                    repeatPassword: 'Confirma tu nueva contraseña',

                    placeholders: {
                        currentPassword: 'Contraseña actual...',
                        newPassword: 'Nueva contraseña...',
                        repeatPassword: 'Confirma tu nueva contraseña...'
                    }
                },

                button: 'Finalizar',
                success: '¡Contraseña cambiada con éxito!'
            },

            articles: {
                othersArticles: {
                    title: 'Otras noticias',
                    smallText: 'Sigue leyendo otras noticias que preparamos para ti.'
                },

                footerArticle: {
                    author: 'Publicado por:',
                    date: 'En'
                },

                comments: {
                    placeholders: {
                        writeComment: 'Escribe aquí tu comentario...'
                    },

                    commentOwner: 'Por',
                    date: 'a las',

                    button: 'Comentar',

                    disabledComments: {
                        title: 'Mejor comentar sobre la vida de otros',
                        smallText: 'Porque los comentarios para esta noticia han sido desactivados por el autor.'
                    }
                }
            },

            hall: {

                pages: {
                    rich: 'Riqueza',
                    other: 'Eventos y Promociones'
                },

                rich: {
                    currencys: {
                        credits: {
                            title: 'Créditos',

                            txt1: 'por tener',
                            txt2: 'créditos'
                        },
                        diamonds: {
                            title: 'Diamantes',

                            txt1: 'por tener',
                            txt2: 'diamantes'
                        },
                        duckets: {
                            title: 'Duckets',
                            txt1: 'por tener',
                            txt2: 'duckets'
                        }
                    },
                },

                events_and_promotions: {
                    events: {
                        title: 'Eventos',

                        txt1: 'por ganar',
                        txt2: 'eventos'
                    },

                    promotions: {
                        title: 'Promociones',

                        txt1: 'por ganar',
                        txt2: 'promociones'
                    }
                },

                aboutHall: 'El Salón de la Fama de puntos y promociones fue creado con el objetivo de promover a los mejores jugadores de eventos o los más comprometidos en ganar promociones, donde tienes la oportunidad de estar entre los 5 usuarios que obtienen más puntos en eventos o que participaron y ganaron promociones!',
                aboutHall2: 'Al final de cada mes, este Salón de la Fama es reseteado, dando una nueva oportunidad para que otras personas puedan aparecer aquí, además de que después de resetearse, los usuarios que quedaron en el podio (los primeros 5 lugares) ganarán premios como rubíes, gemas, emblemas o incluso raros. ¡No pierdas esta oportunidad y participa en los eventos y gana promociones para recibir premios y hacerte famoso!',

                button: 'Saber más'
            },

            staffs: {
                pages: {
                    staff: 'Equipo',
                    gea: 'Gamers en Acción',
                    colab: 'Colaboración',
                    radio: 'Radio',
                    creators: 'Creators',
                },

                defaultMotto: '¡Formo parte del equipo de {{hotelName}}!',
                noStaff: {
                    title: '¡OH BOBBA?!',
                    smallText: '¡Parece que nadie está ocupando este cargo actualmente! Pero estad atentos a nuevas oportunidades, quién sabe, quizás podrías ocupar este puesto.'
                }
            },

            photos: {
                pages: {
                    communityPhotos: 'Fotos de la comunidad',
                    yourPhotos: 'Tus fotos'
                },
                title: 'Últimas Fotos',
                communityPhotos: {
                    smallText: 'Echa un vistazo a algunos de los grandes momentos capturados por nuestra comunidad.',
                },
                yourPhotos: {
                    smallText: 'Aquí están tus grandes momentos capturados por ti.',
                }
            },

            shop: {
                pages: {
                    vip: 'VIP',
                    stars: 'Estrellas',
                    diamonds: 'Diamantes',
                    duckets: 'Duckets'
                },

                buttons: {
                    buy: 'Comprar',
                    seeMore: 'Ver Beneficios',
                    seeLess: 'Ocultar Beneficios',
                    help: 'Herramienta de Ayuda'
                }
            },

            footer: {
                text: "<b>{{hotelName}}</b> 2009 - {{currentDate}} © Todos los derechos reservados.",
                text2: "Desarrollado por",
                habboway: "HabboWay",
                statusServer: "Status",

                publicity: {
                    title: 'Publicidad de terceros',
                    smallText: 'Los anuncios publicitarios sirven como forma de apoyo financiero para {{hotelName}}'
                },

                changeLanguage: 'Cambiar idioma',
                languages: {
                    pt: 'Portugués',
                    en: 'Inglés',
                    es: 'Español'
                }
            },
        }
    }
}

export { messages };

