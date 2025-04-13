const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const loggingMiddleware = require('./middleware/loggingMiddleware');
const requestTimeMiddleware = require('./middleware/requestTimeMiddleware');
const PORT = 3000

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

//Import Routes
//These are also categories I am using for data (5%)
const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users')

//Create and render at least one view using a view template and template engine. Third-party Engine. (8%)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')); // Allow PUT/DELETE via query params

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


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});