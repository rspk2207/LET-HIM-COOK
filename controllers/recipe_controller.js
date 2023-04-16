//const fetch = require('node-fetch');
//const { urls, options } = require('../config/recipe');


const recipe_controller = {
    getFeeds:
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
        res.render('recipe',{functionality: 'getFeeds', id: req.params.id})
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
        if(!req.params.from)
        {
            from = '0';
        }
        else
        {
            from = req.params.from;
        }
        if(!req.params.tag)
        {
            tag = '';
        }
        else
        {
            tag = req.params.tag;
        }
        res.render('list',{functionality: 'getRecipeList', from: from, tag: tag})
    },
    getRecipeListSimilar:
    (req,res) => {
        res.render('recipe',{functionality: 'getRecipeSimilar', id: req.params.id})
    }
};

module.exports = recipe_controller;