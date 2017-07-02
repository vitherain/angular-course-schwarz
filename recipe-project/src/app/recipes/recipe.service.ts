import { Recipe } from "./recipe.model";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://i.imgur.com/Jmk1Nva.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'http://i.imgur.com/Jmk1Nva.jpg')
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
