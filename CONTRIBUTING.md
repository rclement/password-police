# Contributing to Password Police

The entire database of websites referenced in Password Police is managed
through [YAML](https://yaml.org) files.

## Guidelines

1. **No duplicates**: Double-check the website is not already in the database
2. **Use a nice icon**: The icon must have a resolution of 32x32. PNG and SVG are the
   preferred format.
3. **HTTPS links**: All sites that support HTTPS should also be linked with an
   HTTPS address.
4. **Don't break the build**: We have a simple continuous integration system
   setup with [Travis](https://travis-ci.org/rclement/password-police).
   If your pull request doesn't pass, it won't be merged. Travis will only
   check your changes after you submit a pull request.
   If you want to test locally, instructions are listed below. Keep reading!

## Adding a new website

Website YAML data files are organized by categories within the [data](data/) folder.
Website icon files are located within the [static/img](static/img/) folder.
Please take a look at existing files for more examples and inspiration.

Adding a new website is composed of 3 simple steps:

1. Add the new file in the proper category, e.g. `data/my-category/my-online-service.yml`:

  ``` yaml
  name: My Online Service
  urls:
    homepage: https://my-online-service.com
    documentation: (optional) https://my-online-service.com/password-rules
    change: (optional) https://my-online-service.com/.well-known/change-password
  img: /img/my-category/my-online-service.png
  note: (optional) Specific instructions
  policies:
    minlength: 8
    maxlength: 32
    uppercase: true
    lowercase: true
    numbers: true
    symbols: true
  ```

2. Add the icon file in the proper category, e.g. `static/img/my-category/my-online-service.png`.
3. If the website category is a new one, proper internationalization (i18n)
   has to be provided in language file within the [locales](locales/) folder,
   under the `categories` field.

When running locally, all YAML data files will be validated against a
[JSON-Schema](https://json-schema.org) defined in [data/validation.js](data/validation.js),
outputing human-readable errors.

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
