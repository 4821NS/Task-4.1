import React from 'react';
import './NavBar.css';
function NavBar(){
    
    return(
        <>   
            <div className='NavBar'>
            <h3 className='Sign_Insider'>Sign up for daily insider</h3>
            <input className='input_Search' type='search' placeholder='Search' />
            <button className='btn'>Subscribe</button>
        </div>
        </>
    )
}
export default NavBar;