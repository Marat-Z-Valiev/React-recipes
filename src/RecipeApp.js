import React, { Component } from 'react';
import './RecipeApp.css';
import NavBar from './NavBar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title:"Cheesecake", 
          ingredients:["flour","water"],
          instructions:"Mix ingredients",
          img:"cheesecake.jpg" 
      },
      {
          id: 1,
          title:"Banana cupcake", 
          ingredients:["flour","banana"],
          instructions:"Mix ingredients",
          img:"banana-cupcake.jpg" 
      },
      {
          id: 2,
          title:"Pistachio pie", 
          ingredients:["flour","water"],
          instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img:"pistachio-pie.jpg" 
      }
    ],
    nextRecipeId: 3,
    showForm: false
  }
  this.handleSave = this.handleSave.bind(this);
  this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return{
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div>
      <NavBar onNewRecipe = {() => this.setState({showForm: true})}/>
      {showForm ? 
      <RecipeInput 
      onSave={this.handleSave}
      onClose={() => this.setState({showForm: false})}/> 
      : null}
      <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
