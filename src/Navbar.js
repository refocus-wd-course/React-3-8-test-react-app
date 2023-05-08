import React from 'react';
import './Navbar.css';
import Button from './Button';

function Navbar() {
    //parent component
    return (
        <nav>
            <ul>
                <li>
                    <span className='name'>Nikola</span>
                </li>
                <li className='right'>
                    <Button color='primary'>Home</Button>
                </li>
                <li className='right'>
                    <Button color='secondary'>About</Button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
