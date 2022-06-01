function Recipe(title,servings,ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
        ingredients = new Array(5).fill('');
}
Recipe.prototype.displayRecipe = function() {
    console.log(`${this.title}\nServes:${this.servings}\nIngredients:\n${this.ingredients}`)
}

const steak = new Recipe('Steak', 4, '-Prime Ribeye\n-Salt\n-Pepper\n-Butter')
steak.displayRecipe();