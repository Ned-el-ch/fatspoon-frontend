export const starRecipe = recipe => {
	return {
		type: "STAR_RECIPE",
		recipe
	}
}

export const unstarRecipe = recipeURI => {
	return {
		type: "UNSTAR_RECIPE",
		recipeURI
	}
}