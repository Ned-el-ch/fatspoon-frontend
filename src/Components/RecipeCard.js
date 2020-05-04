import React from 'react';

const RecipeCard = (props) => {
	const { recipe } = props;
	return (
		<div className="rc-container">
			<div className="rc-image-container">
				<img className="rc-image" src={recipe.info.imageLink} alt=""/>
			</div>
			<div className="rc-title-container">
				<span className="rc-title">{recipe.info.title}</span>
			</div>
			<div className="rc-description-container">
				<span className="rc-description">{recipe.info.description}</span>
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
