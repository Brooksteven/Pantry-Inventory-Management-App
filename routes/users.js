const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


// Load users data from JSON file
const loadUsersData = () => {
    const dataPath = path.join(__dirname, '../data/users.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};
  
// Save users data to JSON file
const saveUsersData = (data) => {
    const dataPath = path.join(__dirname, '../data/users.json');
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Load pantry data
const loadPantryData = () => {
    const pantryPath = path.join(__dirname, '../data/pantry.json');
    return JSON.parse(fs.readFileSync(pantryPath, 'utf8'));
  };

//Display all users
router
    .route('/')
    .get((req, res) => {
        const users = loadUsersData();
    res.render('users', { users })
    });

//Show Add New User Form    
router
    .route('/new')
    .get((req, res) => {
        res.render('add-user')
    })

    //Add New User
    .post((req, res) => {
        const { name, role } = req.body;
        const users = loadUsersData();
        const newUser = { id: String(Date.now()), name, role };
    users.push(newUser);
        saveUsersData(users);
    res.redirect('/users');
    });


//Edit User Form
router
    .route('/edit/:id')
    .get((req, res) => {
        const users = loadUsersData();
        const user = users.find(u => u.id === req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
    res.render('edit-user', { user })
    });


//Update User
router
    .route('/:id')
    .put((req, res) => {
        const { name, role } = req.body;
        const users = loadUsersData();
        const user = users.find(u => u.id === req.params.id);
        if (user) {
            user.name = name;
            user.role = role;
            saveUsersData(users);
        }
    res.redirect('/users');
    })


//Delete User 
router
    .route('/:id')
    .delete((req, res) => {
        let users = loadUsersData();
        users = users.filter(user => user.id !== req.params.id);
        saveUsersData(users);
    res.redirect('/users');
    });


//View a specific user's pantry
router
    .route('/:id/pantry')
    .get((req, res) => {
        const pantry = loadPantryData();
        const users = loadUsersData();
        const user = users.find(u => u.id === req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        const userItems = pantry.filter(item => item.userId === req.params.id);
    res.render('user-pantry', { user, items: userItems })
    })


module.exports = router