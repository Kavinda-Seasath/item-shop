import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
        <div>
          <button type='text'><Link className='navStyle'  to='/'>Prices Per Unit</Link></button>
          <button type='text'><Link className='navStyle' to='/calculator'>Price Calculator</Link></button>
                       
        </div>
    );
  }
}

export default NavBar;