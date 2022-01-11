import React from 'react';
import './btn.css'


const STYLES = [
    'btn--nav'

]

export default function btn(
    { children,
        onClick,
        type,
        buttonStyle, }) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]



    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}