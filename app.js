const express = require('express');
const path = require('path');
const app = express();
const loggingMiddleware = require('./middleware/loggingMiddleware');
const requestTimeMiddleware = require('./middleware/requestTimeMiddleware');
const port = 3000

//Create and render at least one view using a view template and template engine. Third-party Engine. (8%)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//Create and use at least two pieces of custom middleware (5%)
app.use(loggingMiddleware);
app.use(requestTimeMiddleware);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });