const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const loadMockRecipes = () => {
  const filePath = path.join(__dirname, '../data/recipes.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

router.get('/', (req, res) => {
  const recipes = loadMockRecipes();
  res.render('recipes', { recipes });
});


module.exports = router;

