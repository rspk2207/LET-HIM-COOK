const router = require('express').Router();
const recipe_controller = require('../controllers/recipe_controller');

router.get('/:from/:tag',recipe_controller.getRecipeList);
//router.get('/?id='+8138,recipe_controller.getRecipe);
router.get('/:id',recipe_controller.getRecipeDetails);
router.get('/',recipe_controller.getFeeds);
router.get('/',recipe_controller.getFeeds);

module.exports = router;