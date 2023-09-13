import React from 'react';
import './Box.css';
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Box() {
    return (
        <>
          

            <div className='Box_Main'>

            <div className='Box_class'>
                <div className='Box_1'>
                    <h3 className='header'>Explore</h3>

                    <section className='Box_Section'>Home</section>
                    <section className='Box_Section'>Questions</section>
                    <section className='Box_Section'>Articles</section>
                    <section className='Box_Section'>Tutorials</section>
                </div>


                <div className='Box_2'>
                    <h3 className='header'>Support</h3>

                    <section className='Box_Section_1'>FAQs</section>
                    <section className='Box_Section_1'>Help</section>
                    <section className='Box_Section_1'>Contact us</section>


                </div>
                <div className='Box_3'>
                    <h3 className='header'>Stay Connected</h3>
                    <section className='Box_Section_2'>
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook />
                    </section>
                </div>

                </div>
                
                <div>
                    <p id='para'>DEV@Deakin 2023</p>
                </div>
                <div className='Text'>
                    <p >Privacy Policy</p>
                    <p>Terms</p>
                    <p>Code of Conduct</p>
                </div>



                </div>

                
                
          
            

        </>
    )
}
export default Box;