const express = require('express');
const path = require('path');
const app = express();
const loggingMiddleware = require('./middleware/loggingMiddleware');
const requestTimeMiddleware = require('./middleware/requestTimeMiddleware');
const PORT = 3000

//Import Routes
//These are also categories I am using for data (5%)
const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users')

//Create and render at least one view using a view template and template engine. Third-party Engine. (8%)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//Create and use at least two pieces of custom middleware (5%)
app.use(loggingMiddleware);
app.use(requestTimeMiddleware);


//Routes
app.use('/items', itemRoutes);
app.use('/users', userRoutes);

//Root Route to redirect to Items/Pantry/Home Page
//This is the page I want to start on
app.get('/', (req, res) => {
    res.redirect('/items')
})


app.get('/', (req, res) => {
    res.redirect('/users')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });