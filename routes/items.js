const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router
    .route('/')
    .get((req, res) => {});

router
    //Show Add New Item Form
    .route('/new')
    .get((req, res) => {})

    //Add New Item
    .post((req, res) => {});


//Edit Item Form
router
    .route('/edit/:id')
    .get((req, res) => {});


//Update Item
router
    .route('/:id')
    .put((req, res) => {})


//Delete Item 
router
    .route('/:id')
    .delete((req, res) => {});


module.exports = router