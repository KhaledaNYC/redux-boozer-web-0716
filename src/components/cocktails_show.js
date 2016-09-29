import React from 'react'
import {connect} from 'react-redux';


function CocktailShow (props) {
  return (<h1>🍸 {props.cocktail.name}</h1>)

}


function mapStateToProps(state,ownProps){
  const cocktail = state.cocktails.find((cocktail) => {return cocktail.id == ownProps.params.id})
  return {cocktail:cocktail}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CocktailShow);
