import React from 'react';
import Btn from '../../Components/Button/btn'
import './topBar.css'
export default function TopBar() {
    return (
        <div className='topBar'>
            <div className='nameButton'>
                <div >Name</div>
            </div>
            <div className='otherBtns'>
                <Btn className='projects'>Projects</Btn>
                <Btn className='aboutMe'>About Me</Btn>
                <Btn className='contact'>Contact</Btn>
                
            </div>

        </div>
    )
}