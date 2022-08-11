import React from 'react';
import logo from '../assets/logo.png'
import '../App.css'

const Header = () => {
    return ( 
        <header>
            <img src={logo} alt='logo' />
            <button className='analyze-button'>ANALYZE ASAs</button>
        </header>
     );
}
 
export default Header;