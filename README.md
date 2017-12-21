# Alva Website
The landing page for [Alva](https://github.com/meetalva/alva), a radically new design tool that enables cross-functional teams to create contextual digital experiences and code-based ecosystems.


## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.


```sh
$ git clone https://github.com/meetalva/website.git
cd website
npm install
```

## Development

```sh
npm start # starts a server at http://localhost:5000
```

## Deployment

* Create an account with [zeit.co](https://zeit.co/)
* Tell one of the [maintainers](https://github.com/orgs/meetalva/people) to add you to the [meetalva team](https://zeit.co/teams/meetalva) on zeit.co
* Create an access token at [zeit.co/account/tokens](https://zeit.co/account/tokens)

```sh
# [[NOW_TOKEN]]=token from https://zeit.co/account/tokens
NOW_TOKEN=[[NOW_TOKEN]] npm run deploy # deploy to a random address
NOW_TOKEN=[[NOW_TOKEN]] npm run deploy # deploy meetalva.io
```

## Contribute

Feel free to dive in! [Open an issue](https://github.com/meetalva/website/issues/new) or submit a [Pull Request](https://github.com/meetalva/website/pull/new/master). :heart:
