import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = ({recipe, labels, link}) => {
	return (
		<div className="rc-container">
			<div className="rc-image-container">
				<img className="rc-image" src={recipe.imageLink} alt=""/>
			</div>
			<div className="rc-title-container">
				<Link to={link}>
					<span className="rc-title">{recipe.title}</span>
				</Link>
			{/* <div className="rc-labels-container">
				<div className="rc-labels-missing-items">
					{labels.missingIngredients === 0 ?
					<span className="rc-labels-missing-items-none label">Got everything!</span>
					:
					<span className="rc-labels-missing-items-some label">Few missing items!</span>
					}
				</div>
					{labels.vegetarian ?
					<span className="rc-labels-vegetarian label">Vegetarian</span>
					:
					null
					}
			</div> */}
			</div>
			<div className="rc-description-container">
				<span className="rc-description">{recipe.description}</span>
			</div>
			<div className="rc-servings-and-times-container">
				<div>Prep Time: {recipe.prepTime} mins</div>
				<div>Cook Time: {recipe.cookingTime} mins</div>
				<div>Serves: {recipe.servingCount}</div>
			</div>
			{/* <div className="rc-buttons-container">
				<button className="rc-star-recipe-button" onClick={() => {starRecipe(recipe)}}>Star Recipe</button>
				<button className="rc-unstar-recipe-button" onClick={() => {unstarRecipe(recipe.uri)}}>Unstar Recipe</button>
			</div> */}
			{/* <div className="rc-source-container">
				<a className="rc-source-link" href={recipe.url} target="_blank" rel="noopener noreferrer">
					<span className="rc-source-link-text">Source: {recipe.source}</span>
				</a>
			</div> */}
		</div>
	)
}

export default RecipeCard;