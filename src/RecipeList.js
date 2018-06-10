import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
                title:"Cheesecake", 
                ingredients:["flour","water"],
                instructions:"Mix ingredients",
                img:"cheesecake.jpg" 
            },
            {
                title:"Banana cupcake", 
                ingredients:["flour","banana"],
                instructions:"Mix ingredients",
                img:"banana-cupcake.jpg" 
            },
            {
                title:"Pistachio pie", 
                ingredients:["flour","water"],
                instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                img:"pistachio-pie.jpg" 
            }
        ]
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));
        return(
            <div className="recipes-block">
            {recipes}
            </div>
        )
    }
}

export default RecipeList;