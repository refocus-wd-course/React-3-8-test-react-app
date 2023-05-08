import React from 'react';
import './Button.css';

function Button(props) {
    const { color, children } = props;

    return <button className={color + ' btn'}>{children}</button>;
}

export default Button;
