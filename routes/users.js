const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//Display all users
router
    .route('/')
    .get((req, res) => {});

//Show Add New User Form    
router
    .route('/new')
    .get((req, res) => {})

    //Add New User
    .post((req, res) => {});


//Edit User Form
router
    .route('/edit/:id')
    .get((req, res) => {});


//Update User
router
    .route('/:id')
    .put((req, res) => {})


//Delete User 
router
    .route('/:id')
    .delete((req, res) => {});


//View a specific user's pantry
router
    .route('/:id/pantry')
    .get((req, res) => {})


module.exports = router