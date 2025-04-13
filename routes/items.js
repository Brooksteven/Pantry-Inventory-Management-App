const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router
    .route('/')
    .get((req, res) => {
        res.render('index', { items: filteredITems });
    });

router
    //Show Add New Item Form
    .route('/new')
    .get((req, res) => {
        res.redirect('add-items');
    })

    //Add New Item
    .post((req, res) => {
        res.redirect('/items');
    });


//Edit Item Form
router
    .route('/edit/:id')
    .get((req, res) => {
        res.render('edit-item', { item });
    });


//Update Item
router
    .route('/:id')
    .put((req, res) => {
        res.redirect('/items');
    })


//Delete Item 
router
    .route('/:id')
    .delete((req, res) => {
        res.redirect('/items');
    });


module.exports = router