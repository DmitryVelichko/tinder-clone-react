import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import tinder_logo from './img/t_logo.png';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
    return (
        <div className='header'>
           <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
           </IconButton> 
            <img className="header__logo" src={tinder_logo} alt="tinder logo fire"/>
           <IconButton> 
            <ForumIcon className="header__icon" fontSize="large"/>
           </IconButton> 
        </div>
    )
}

export default Header
