const express = require('express');
const path = require('path');
const app = express();
const port = 3000

//Create and render at least one view using a view template and template engine. Third-party Engine. (8%)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });