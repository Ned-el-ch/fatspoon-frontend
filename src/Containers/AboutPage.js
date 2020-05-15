import React, { Fragment } from 'react'
import PageHeader from '../Components/PageHeader'
import { Link } from 'react-router-dom';
import { ScreenshotCarousel } from '../Components/ScreenshotCarousel';

const AboutPage = ({userIsLoggedIn}) => {
	return (
		<div className="content ap-container">
			<PageHeader title={"Made by Niki Nedelchev"}/>
			<div className="content--inner">
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">Here are some screenshots!</span>
				</div>
				<ScreenshotCarousel/>
				{userIsLoggedIn ?
				<Fragment>
					<div className="hp-app-get-started-container">
						<span className="hp-app-get-started">Get started by adding your own recipes in <Link to="/MyCookbook">My Cookbook</Link> or <Link to="/Search">Search</Link> for some! When you view a recipe authored by someone else you can star it, and it'll be added to your cookbook!</span>
					</div>
					<div className="hp-app-get-started-container">
						<span className="hp-app-get-started">Additionally, when viewing a recipe you can add it to your <Link to="/">Meal Planner</Link>, choosing the number of servings and date. If you've planned multiple recipes in a week, the meal planner will show you on which one you'll run out of a certain ingredient!</span>
					</div>
					<div className="hp-app-get-started-container">
						<span className="hp-app-get-started">Your <Link to="/MyShoppingList">Shopping List</Link> will automatically populate with the items you need for the current week!</span>
					</div>
					<div className="hp-app-get-started-container">
						<span className="hp-app-get-started">When you go shopping, just click DONE on each item from your shopping list to add it to <Link to="/MyFridge">your Fridge</Link>. If you click on an item you can edit the weight to match how much you've purchased!</span>
					</div>
				</Fragment>
				:
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">Get started by <Link to="/Login">logging in</Link> or <Link to="/SignUp">signing up</Link>!</span>
				</div>
				}
				<div className="hp-app-get-started-container">
				<span className="ap-contact">Find me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ned_el_ch">Twitter</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch">GitHub</a>, and <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ned-el-ch/">LinkedIn</a></span>
				</div>
				<span className="ap-description">This is a single-page app I built to practice using React, Redux, SCSS, and Ruby on Rails (as an API). Check out the <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch/fatspoon.life">frontend repo</a> or the <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch/fatspoon.life-backend">backend repo</a> if you want to know more.</span>
				<span className="ap-packages">List of main packages I used for the frontend</span>
				<ul className="ap-ul">
					<li className="ap-li">
						React-Redux
					</li>
					<li className="ap-li">
						Redux-Thunk
					</li>
					<li className="ap-li">
						React-Bootstrap
					</li>
					<li className="ap-li">
						React-Router, -Dom
					</li>
					<li className="ap-li">
						React-Lottie, GSAP, and React-Transition-Group for animations
					</li>
					<li className="ap-li">
						React-Select
					</li>
					<li className="ap-li">
						SCSS for styling elements
					</li>
				</ul>
				<span className="ap-packages">List of "helper" packages I used for the frontend</span>
				<ul className="ap-ul">
					<li className="ap-li">
						Chroma.js
					</li>
					<li className="ap-li">
						React-Datepicker
					</li>
					<li className="ap-li">
						Redux-Devtools-Extension
					</li>
					<li className="ap-li">
						Moment.js for handling dates
					</li>
					<li className="ap-li">
						Custom UUID function in lieu of a package for better customisation
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AboutPage