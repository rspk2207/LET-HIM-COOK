const envs = require("../config/environment")

const urls = {
  recipesAutoComplete: `https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=`,
  recipesList: `https://tasty.p.rapidapi.com/recipes/list?from=0&size=10',//&tags=`,
  recipeListSimilar: `https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=`,
  recipeDetails: `https://tasty.p.rapidapi.com/recipes/get-more-info?id=`,
  tagsList: `https://tasty.p.rapidapi.com/tags/list`,
  feedsList: `https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0530&vegetarian=false&from=0`
}

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${envs.API_KEY}`,
      'X-RapidAPI-Host': `tasty.p.rapidapi.com`
    }
  };

module.exports = { urls,options };