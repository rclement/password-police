<p align="center">
  <img align="center" width="256" height="256" src="assets/svg/logo.svg"/>
</p>

# Password Police 🔐🚨

[![Build Status](https://travis-ci.org/rclement/password-police.svg?branch=master)](https://travis-ci.org/rclement/password-police)
[![Password Police License](https://img.shields.io/github/license/rclement/password-police.svg)](LICENSE)

Password Police provides a list of password policies for online services,
available as a browsable web-application and a REST API.

It is largely inspired by [TwoFactorAuth.org](https://twofactorauth.org).

## Goal

Having a comprehensive list of password policies for online services,
so that one can maximize the security of passwords used on the web.

Providing a browsable web-application is a first step for the curious and security-conscious,
but ideally integrating the REST API with password managers could be a more user-friendly solution:
imagine if your password manager were to generate a secure password,
already within the maximum limits of each online service! 🚀

## Contributing

If you would like to contribute, either by adding a new website to the database
or adding/fixing a feature, read the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## Running locally

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## License

The MIT License (MIT)

Copyright (c) 2019 - present, Romain Clement
