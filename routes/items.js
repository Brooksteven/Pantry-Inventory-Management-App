const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Load pantry data from JSON file
const loadPantryData = () => {
    const dataPath = path.join(__dirname, '../data/pantry.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  };
  
// Save pantry data to JSON file
const savePantryData = (data) => {
    const dataPath = path.join(__dirname, '../data/pantry.json');
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  };

router
    .route("/")
    .get((req, res) => {
        const pantryData = loadPantryData();
        const category = req.query.category;
        const filteredItems = category
        ? pantryData.filter((item) => item.category === category)
        : pantryData;
  res.render("index", { items: filteredItems });
});

router
  //Show Add New Item Form
  .route("/new")
  .get((req, res) => {
    res.render("add-item");
  });

//Add New Item
router
  .route('/')
  .post((req, res) => {
    const { name, category, quantity } = req.body;
    const pantryData = loadPantryData();
    const newItem = { id: String(Date.now()), name, category, quantity };
    pantryData.push(newItem);

    savePantryData(pantryData);
    res.redirect("/items");
  });

//Edit Item Form
router
.route("/edit/:id")
.get((req, res) => {
    const pantryData = loadPantryData();
    const item = pantryData.find(item => item.id === req.params.id);
    if (!item) {
        return res.status(404).send('Item not found');
    }
  res.render("edit-item", { item });
});

//Update Item
router
.route("/:id")
.put((req, res) => {
    const { name, category, quantity } = req.body;
    const pantryData = loadPantryData();
    const item = pantryData.find(item => item.id === req.params.id);

    if (item) {
        item.name = name;
        item.category = category;
        item.quantity = quantity;
        savePantryData(pantryData);
    }
  res.redirect("/items");
});

//Delete Item
router
.route("/:id")
.delete((req, res) => {
    const pantryData = loadPantryData();
    const updatedPantry = pantryData.filter(item => item.id != req.params.id);
    savePantryData(updatedPantry);
  res.redirect("/items");
});

module.exports = router;
