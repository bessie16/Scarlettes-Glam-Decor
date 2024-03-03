import './Navbar.css';
import logo from './../../images/logo.png';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';


export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [menuIconChange, setMenuIconChange] = useState(false);

    function handleMenuClick() {
        setMenuIconChange(!menuIconChange);
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <nav>
            <img src={logo} alt='logo' className='websiteLogo' id='homeDecor' />

            <div className='menuLinks'>
                <a href='#homeDecor'>Home</a>
                <a href='#packagesDecor'>Packages</a>
                <a href='#feedbackDecor'>Feedback</a>
                <a href='#contactDecor'>Contact</a>
            </div>

            <div className={!menuIconChange ? 'topMenuIcon' : 'changeToX'} onClick={handleMenuClick}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>

            {showMobileMenu && <MobileMenu />}
        </nav>
    );
}