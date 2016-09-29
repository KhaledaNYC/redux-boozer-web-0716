import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          <button>< Link to="/cocktails">See The Dranks</Link></button>
          { props.children }
        </div>

      </div>
    )
};
