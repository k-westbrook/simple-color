import axios from 'axios';
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
const GET_SPECIFIC_RECIPE = 'GET_SPECIFIC_RECIPE';
const REMOVE_RECIPE = 'REMOVE_RECIPE';

/**
 * INITIAL STATE
 */
const recipeObject = {
  recipes: [],
  selectedRecipe: null
};


/**
 * ACTION CREATORS
 */

const getRecipes = (recipes) => ({ type: GET_ALL_RECIPES, recipes })
const getRecipe = (recipe) => ({ type: GET_SPECIFIC_RECIPE, recipe })
const removeRecipe = (recipe) => ({ type: REMOVE_RECIPE, recipe })


/**
 * THUNK CREATORS
 */
