# Hylib

CMS made for Comet Emulator using what ReactJS has to offer.

### Requisites
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/) >= 16.x
- [Backend Server for Hylib](https://github.com/TheLaxus/HylibServer)

### How to install

Open you bash and use npm install or yarn install to install the packages

```bash
npm install --force
```

### Install packages and run the backend server
- [How to configure Backend Server](https://github.com/TheLaxus/HylibServer)


### How to configure CMS

Rename `public/configuration.json.example` to `public/configuration.json` and edit:
- "apiUrl"
- "hotel.url"
- "hotel.name"
- "clients" put the url of your client php

### Development
To make changes, launch it with developer mode to apply changes after saving.
```bash
npm start
```

### Compile
To build the production CMS just run the command
```bash
npm run build
```
A folder will be generated `"build"` will be created and you will have to upload it to your web server.

###
## Contributing

All pull requests are welcome for the best performance and design of cms.

Please test before submitting the request.

### How get SSO in client?
Well, there are two ways.
Javascript:
```
new URLSearchParams(window.location.search).get("sso")
```
PHP:
```
$sso = isset($_GET['sso']) ? $_GET['sso'] : null;
```

### Demo
[Visit Lella](https://lella.com.br)

### Developers
- Laxus
- Ron
### Designs
- Wake
- Dut
