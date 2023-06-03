require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const Item = require('./models/item');
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

/*-------- INDUCES ---------*/
// seven RESTful routes

// INDEX
// list all items
app.get('/items', async (req, res) => {
    try {
        const foundItems = await Item.find({});
        res.render('items/Index', {
            items: foundItems
        })
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
// show the user a form to fill out to create an item
app.get('/items/new', (req, res) => {
    res.render('items/New')
})

// DELETE
// backend only functionality that is used to delete an item
app.delete('/items/:id', async (req, res) => {
    try {
        await Item.findOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/items')
            })
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// UPDATE
// backend only functionality that is used to update an item
app.put('/items/:id', async (req, res) => {
    try {
        await Item.findOneAndUpdate({ '_id': req.params.id}, 
            req.body, { new: true })
            .then(() => {
                res.redirect(`/items/${req.params.id}`)
            })
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// CREATE
// backend only functionality that is used to create an item
app.post('/items', async (req, res) => {
    try {
        const createdItem = await Item.create(req.body);
        res.redirect(`/items/${createdItem._id}`)
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
})

// EDIT
// show you a form that lets you edit the item
app.get('/items/:id/edit', async (req, res) => {
    try {
        const foundItem = await Item.findOne({_id: req.params.id})
        res.render('items/Edit', {
            item: foundItem
        })
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// SHOW
// shows you one individual item
app.get('/items/:id', async (req, res) => {
    try {
       const foundItem = await Item.findOne({_id: req.params.id})
       res.render('items/Show', {
            item: foundItem
       })
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`The Port at ${PORT} is lit`)
})