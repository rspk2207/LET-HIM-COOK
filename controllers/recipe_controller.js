//const fetch = require('node-fetch');
//const { urls, options } = require('../config/recipe');
const User = require('../models/user');
const Review = require('../models/reviews');

const recipe_controller = {
    getHome:
    /*
    (req,res) => {
        fetch(urls.feedsList,options)
        .then(response => response.json())
        .then(response => 
            {
                //res.send(response.results[0].item);
                res.render('feeds',{data: response});
            })
        .catch(err => console.log(err));
    },
    */

    (req,res) => {
        res.render('home',{functionality: 'getFeeds', id: req.params.id})
    },
    getRecipeDetails:
    (req,res) => {
        res.render('recipe',{functionality: 'getRecipeDetails', id: req.params.id})
    },
    getTags:
    (req,res) => {
        res.render('recipe',{functionality: 'getTags', id: req.params.id})
    },
    getRecipeAutoComplete:
    (req,res) => {
        res.render('recipe',{functionality: 'getRecipeAutoComplete', id: req.params.id})
    },
    getRecipeList:
    (req,res) => {
        var from,tag;
        if(!req.query.from)
        {
            from = '0';
        }
        else
        {
            from = req.query.from;
        }
        if(!req.query.tag)
        {
            tag = '';
        }
        else
        {
            tag = req.query.tag;
        }
        if(!req.query.q)
        {
            q = '';
        }
        else
        {
            q = req.query.q;
        }
        res.render('list',{functionality: 'getRecipeList', from,tag,q});
    },
    getRecipeListSimilar:
    (req,res) => {
        res.render('recipe',{functionality: 'getRecipeSimilar', id: req.params.id})
    },
    saveRecipe:
    (req,res) => {
        User.findOne({email: req.user.email})
        .then(user =>{
            if(!user.savedRecipes.find(id=> { return id == req.body.id}))
            {
                user.savedRecipes.push(req.body.id);
                user.savedRecipeName.push(req.body.name);
                user.savedRecipeImg.push(req.body.img);
                user.save();
                user.markModified('savedRecipes');
                user.markModified('savedRecipeName');
                user.markModified('savedRecipeImg');
            }
            res.redirect('/'+req.body.id);
        })
        .catch(err => {
            console.log(err);
            res.redirect('/'+req.body.id);
        });
        res.redirect('/'+req.body.id);
    },
    createComment:
    (req,res) => {

    }
};

module.exports = recipe_controller;