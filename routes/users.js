const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//Display all users
router
    .route('/')
    .get((req, res) => {
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
        users.push(newUser);
        res.redirect('/users');
    });


//Edit User Form
router
    .route('/edit/:id')
    .get((req, res) => {
        res.render('edit-user', { user })
    });


//Update User
router
    .route('/:id')
    .put((req, res) => {
        res.redirect('/users');
    })


//Delete User 
router
    .route('/:id')
    .delete((req, res) => {
        res.redirect('/users');
    });


//View a specific user's pantry
router
    .route('/:id/pantry')
    .get((req, res) => {
        res.render('user-pantry', { items: userItems })
    })


module.exports = router