# Pantry Management Web App

This is a web application that allows users to manage their pantry items, users, and recipes. The app is built using **Node.js** and **Express**, with a variety of features including the ability to:

- Add, edit, and delete pantry items.
- Manage users and their roles (admin or user).
- View users' pantry items.
- Find recipes based on pantry items.

## Features

- **User Management**: Admins can create, edit, and delete users, as well as view individual users' pantry items.
- **Pantry Management**: Users can add, edit, and delete pantry items, including details like name, category, and quantity.
- **Recipe Suggestions**: Users can find recipe ideas based on their pantry items.
- **CRUD Operations**: Create, Read, Update, and Delete operations are implemented for both users and pantry items.

## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for Node.js.
- **EJS**: Template engine for rendering HTML views.
- **JSON**: Used for storing data related to users, pantry items, and recipes.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Brooksteven/Pantry-Inventory-Management-App
    cd Pantry-Inventory-Management-App
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    nodemon app.js or npm start
    ```
    This will start the server and the app will be available at `http://localhost:3000`.

## Folder Structure

- **data**: Contains JSON files for storing users, pantry items, and recipes.
- **views**: Contains EJS templates for rendering HTML views.
- **routes**: Contains the Express route definitions for users, pantry items, and recipes.
- **middleware**: Contains custom middleware like request logging and error handling.
- **public/styles**: Contains CSS files for styling the application.

## Available Routes

- `/`: Home page showing pantry items.
- `/users`: View all users.
- `/users/new`: Add a new user.
- `/users/edit/:id`: Edit an existing user.
- `/users/:id/pantry`: View a specific user's pantry.
- `/items`: View all pantry items.
- `/items/new`: Add a new pantry item.
- `/items/edit/:id`: Edit an existing pantry item.
- `/recipes`: View recipes based on pantry items.

## Error Handling

The application includes basic error handling middleware that catches unhandled errors and displays appropriate messages to the user.

## Resources

Here are some helpful resources for further reading and reference:

- [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
- [Node.js File System Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
- [Path Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)
- [JSON.parse() Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Express Routing Guide](https://expressjs.com/en/guide/routing.html)
- [Method Override Guide](https://www.npmjs.com/package/method-override)
- [EJS Official Documentation](https://ejs.co/)
- [EJS Examples](https://www.npmjs.com/package/ejs)
- [express.json() Documentation](https://expressjs.com/en/api.html#express.json)
- [express.urlencoded() Documentation](https://expressjs.com/en/api.html#express.urlencoded)
- [Error Handling in Express](https://expressjs.com/en/guide/error-handling.html)
- [CRUD Operations in REST API](https://www.restapitutorial.com/)
- [Make a README](https://www.makeareadme.com/)
- [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/main/README.md)
- [Build a REST API with Node JS and Express | CRUD API Tutorial](https://www.youtube.com/watch?v=l8WPWK9mS5M)
- [Creating a Custom Middleware | Working with Express JS | A Complete Node JS Course](https://www.youtube.com/watch?v=pGHcd62rCXk)
- [Lecture Presentation from Per Scholas]()
- [Express.JS](https://expressjs.com/en/guide/routing.html)
- [Folder Structure for NodeJS & ExpressJS project](https://dev.to/mr_ali3n/folder-structure-for-nodejs-expressjs-project-435l)
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Reading and writing JSON files in Node.js: A complete tutorial](https://blog.logrocket.com/reading-writing-json-files-node-js-complete-tutorial/)
- [How To Use __direname in Node.js](https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname)
- [EJS](https://ejs.co/)
- [method-oveeride](https://expressjs.com/en/resources/middleware/method-override.html)
- [Logger Middleware](https://retrodevs.medium.com/express-js-logger-middleware-a-quick-and-easy-guide-6b79a14ea164)
- [Middleware Function requestTime](https://expressjs.com/en/guide/writing-middleware.html)


## Author

* **Brooklynn Stevenson** - [Git Hub Profile](https://github.com/Brooksteven)
* **Email** - Steven.lynn.brooks@gmail.com
* **LinkedIn** - https://www.linkedin.com/in/brooklynn-stevenson/