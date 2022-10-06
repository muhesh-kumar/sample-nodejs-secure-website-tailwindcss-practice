# sample-nodejs-secure-website

- Used FlowBite for form components
- Used Tailwindcss for styling

<h1 align="center">
🌐 Sample NodeJS Secure Website
</h1>
<p align="center">
Built using MongoDB, Expressjs, React, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> Vulnerability Avoidance Mechanism for Nodejs-based Web Applications​

## clone or download

```terminal
$ git clone https://github.com/muhesh-kumar/sample-nodejs-secure-website.git
$ yarn # or npm i
```

## project structure

```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^v16.14.2
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

<!-- ## Client-side usage(PORT: 3000)

```terminal
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally
// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
``` -->

<!-- ## Deploy Server to [Heroku](https://dashboard.heroku.com/)

```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
``` -->

<!-- ### After creating heroku

remember to update the file of [client/webpack.prod.js](https://github.com/amazingandyyy/mern/blob/master/client/webpack.prod.js)

```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
``` -->

# Dependencies(tech-stacks)

## Client Side Dependencies

## Server Side Dependencies

# Screenshots of this project

<!-- User visit public and Home page
![User visit public and Home page](http://i.imgur.com/ORCGHHY.png)

User can sign in or sign up
![User can sign in or sign up](http://i.imgur.com/rrmbU5I.png)

After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account route](http://i.imgur.com/FzLB51u.png) -->

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/amazingandyyy/sample-nodejs-secure-website/issues) (preferred)

Email Me: muhesh4102002@gmail.com (welcome, say hi)

## Author

[Muhesh Kumar](https://github.com/muhesh-kumar)

### License

[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)
