import * as ShoppingListActions from './shopping-list.actions';
import {Action} from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";

export interface AppState {
  shoppingList: State
}

export interface State {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, (<ShoppingListActions.AddIngredient>action).payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...(<ShoppingListActions.AddIngredients>action).payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...((<ShoppingListActions.UpdateIngredient>action).payload).ingredient
      };

      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);

      return {
        ...state,
        oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredient = {...state.ingredients[(<ShoppingListActions.StartEdit>action).payload]}
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: (<ShoppingListActions.StartEdit>action).payload
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}