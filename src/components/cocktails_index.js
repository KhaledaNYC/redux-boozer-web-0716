import React from 'react';
import * as actions from '../actions/index'
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'

class CocktailsIndex extends React.Component {


  render(){
    return (
  <div>
    <ul>
      {this.props.cocktails.map(cocktail =>
          <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>
        )}
    </ul>
    {this.props.children}
  </div>)
}
};

// function mapDispatchToProps(dispatch) {
//
//   return {actions: bindActionCreators(actions, dispatch)}
// }

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}
const componentCreator = connect(mapStateToProps)

export default componentCreator(CocktailsIndex);
