const defaultRecipes = [
	{
		id: 'ba41038-d4a7-77c0-8e30-cb6dbfc064',
		info: {
			title: 'Pancakes',
			description: 'This easy American pancake recipe makes light and fluffy pancakes that are great for a weekend brunch. Try adding blueberries to the batter before cooking.',
			imageLink: 'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg',
			prepTime: '15',
			cookingTime: '15',
			servingCount: '2'
		},
		ingredients: [
			{
				id: 'aa1da3-f1bb-bb82-ca11-36a5e20e2452',
				weight: '200'
			},
			{
				id: '38a436-0da-bce4-a7a2-3751068bc',
				weight: '150'
			},
			{
				id: 'a2f77-cb3-8c1-b806-8cde7d11a8e',
				weight: '100'
			}
		],
		instructions: [
			{
				id: '0ba2a0-f53c-750d-4847-d73db46e6fbe',
				text: 'take the thing'
			},
			{
				id: '65a65c6-f7b6-8071-3d6d-0cfaed7cb4b1',
				text: 'then do the other thing idk'
			}
		]
	},
	{
		id: 'c841343-66f-23-a70f-300176d7f42',
		info: {
			title: '2-Ingredient Donuts!!',
			description: 'The quickest doughnut recipe you\'ll ever make! 2 simple ingredients make for a super quick snack or dessert!',
			imageLink: 'https://www.justataste.com/wp-content/uploads/2014/03/easy-homemade-glazed-doughnut-holes-recipe-500x500.jpg',
			prepTime: '3',
			cookingTime: '10',
			servingCount: '3'
		},
		ingredients: [
			{
				id: '6412fc8-23d-4ab0-2abe-31d4b52c0c0',
				weight: '150'
			},
			{
				id: '2f7ff80-8faf-848d-0d7a-f2431e38404',
				weight: '200'
			}
		],
		instructions: [
			{
				id: 'dcf4bfb-aa51-65e8-6fcc-acc345351423',
				text: 'Mix the ingredients'
			},
			{
				id: '685f8d-6fc2-570a-afdc-e6f6a0d7615c',
				text: 'Fry in vegetable oil at around 200°C'
			}
		]
	}
]

export default (state = defaultRecipes, action) => {

	// let index;

	switch (action.type) {

		case "ADD_RECIPE":
			let recipeExists = state.find(r => r.id === action.recipe.id)
			if (recipeExists) {
				return state;
			} else {
				return [...state, action.recipe]
			}

		case "STAR_RECIPE":
			// index = state.findIndex(recipe => recipe.uri === action.recipe.uri);
			// if (index === -1) {
			// 	return [...state, action.recipe];
			// } else {
			// 	return state;
			// }
			return state;

		case "UNSTAR_RECIPE":
			// return state.filter(recipe => recipe.uri !== action.recipeURI);
			return state;

		default:
			return state;
	}
}
