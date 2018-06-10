import React, { Component } from 'react';
import './RecipeApp.css';
import NavBar from './NavBar';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
