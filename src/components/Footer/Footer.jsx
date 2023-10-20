import React from "react";
import "./Footer.scss";
import { TypeAnimation } from "react-type-animation";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="top">
//         <div className="item">
//           <h1>Categories</h1>
//           <span>Women</span>
//           <span>Men</span>
//           <span>Shoes</span>
//           <span>Accessories</span>
//           <span>New Arrivals</span>
//         </div>
//         <div className="item">
//           <h1>Links</h1>
//           <span>FAQ</span>
//           <span>Pages</span>
//           <span>Stores</span>
//           <span>Compare</span>
//           <span>Cookies</span>
//         </div>
//         <div className="item">
//           <h1>About</h1>
//           <span>
//             Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
//             amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
//             ut labore etdolore.
//           </span>
//         </div>
//         <div className="item">
//           <h1>Contact</h1>
//           <span>
//             Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
//             amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
//             ut labore etdolore.
//           </span>
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="left">
//           <span className="logo">Lamastore</span>
//           <span className="copyright">
//             © Copyright 2023. All Rights Reserved
//           </span>
//         </div>
//         <div className="right">
//           <img src="/img/payment.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };















import payment from '../../img/payment.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='tittle'>
                        <h1>BACKBONEE</h1>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>Quick links</h4>
                        <a href='/faq'>
                            <p>FAQ</p>
                        </a>
                        <a href='/terms'>
                            <p>Terms Of Service </p>
                        </a>
                        <a href='/return'>
                            <p>Return/Refund Policies</p>
                        </a>
                        <a href='/shipping'>
                            <p>Shipping Policies</p>
                        </a>
                        <a href='/about'>
                            <p>About</p>
                        </a>
                        <a href='/privacy'>
                            <p>Privacy Policies</p>
                        </a>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>About</h4>
                        <span>
                        <TypeAnimation
      sequence={[
        'At BackBonee, we prioritize the satisfaction of our customers above all else.', // Types 'One'
        3000, // Waits 1s
        'We understand that shopping for the perfect product can be overwhelming, so we strive to make the process as easy and enjoyable as possible. ', // Deletes 'One' and types 'Two'
        3000, 
        'With a wide selection of high-quality products and various ways to help you find what you need, we are confident that we can meet your shopping needs', 
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                         </span>
                    </div>
                    <div className='sb_footer-links_div'>
                        <h4>Contact</h4>
                        <span>
                        BackBonee LLC

                        1441 Broadway Suite 6168

                        New York, NY, US 10018
                         </span>
                    </div>

                </div>

                <hr></hr>

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} codeInn. All right reserved
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>


                    <div className="right">
                        <img src={payment} alt="" />
                    </div>

                        
                        {/* <a href='/items'><div><p>Terms and condition</p></div></a>
                        <a href='/items'><div><p>Privacy</p></div></a>
                        <a href='/items'><div><p>Security</p></div></a>
                        <a href='/items'><div><p>Cookies declaration</p></div></a> */}


                    </div>
                </div>
            </div>
        </div>
    )
}





export default Footer;





