import React from 'react';
import  './Nav.css';
import ExtraText from './ExtraText.js';
import ExtraText1 from './ExtraText1.js';
import ExtraText2 from './ExtraText2';
import Collection from './Collection';
import NavBar from './NavBar.js';
import Collection1 from './Collection1';
import Box from './Box.js';
function Nav(){
    return (
        <>
        <div className='Nav_Box'>
            <p className='Heading'>DEV@Deakin</p>
            <input className='input_Field' type='search' placeholder='Search' />
            <p className='bttn'>Post</p>
            <p className='bttn'>Login</p>
        </div>
        <div className='Img'>
            <img src='img/Main.jpg' alt='img' />
        </div>
        <h1 className='Heading_1'>Featured Article</h1>  




        <div>
            <Collection1 />
            <ExtraText text="See All Article" />

            <ExtraText1 text1="Featured Tutorials" />
            <Collection/>
            <ExtraText2 text2="See All Tutorials" />
            <NavBar />
            <Box/>
        </div>
        </>
    )
}
export default Nav;