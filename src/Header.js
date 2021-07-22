import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import tinder_logo from './img/t_logo.png';


const Header = () => {
    return (
        <div className='header'>
            <PersonIcon />
            <img className="header__logo" src={tinder_logo} alt="tinder logo fire"/>
            <ForumIcon />
        </div>
    )
}

export default Header
