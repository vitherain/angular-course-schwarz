import * as ShoppingListActions from './shopping-list.actions';
import {Action} from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";


const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...<Ingredient[]>action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[(<{index: number, ingredient: Ingredient}>action.payload).index];
      const updatedIngredient = {
        ...ingredient,
        ...(<{index: number, ingredient: Ingredient}>action.payload).ingredient
      };

      const ingredients = [...state.ingredients];
      ingredients[(<{index: number, ingredient: Ingredient}>action.payload).index] = updatedIngredient;

      return {
        ...state,
        ingredients: ingredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(<number>action.payload, 1);

      return {
        ...state,
        oldIngredients
      };
    default:
      return state;
  }
}
