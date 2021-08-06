import React from 'react';
import '../components/styles/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar} from '@material-ui/core';
import { Link } from "react-router-dom";

function Header() {
    return (

        <div className='header'>
            <Link to='/'>
                <img
                    className='header_icon'
                    src="https://image.flaticon.com/icons/png/512/20/20176.png"
                    alt=''
                />
            </Link>
            <Link to='/Perfil'>
                <img
                    className='header_icon'
                    src="https://image.flaticon.com/icons/png/512/64/64572.png"
                    alt=''
                />
            </Link>
            
            <div className='header_right'>
                <p>Become a guider</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>

        </div>
    );
}

export default Header;