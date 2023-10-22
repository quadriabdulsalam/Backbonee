import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";



const Navbar = (props) => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);


  const [isOpen, setIsopen] = useState(false);
  const [isclicked, setIscliked] = useState(false);

  const togglemenu = ()=>{
    setIsopen((open) => !open);
    setIscliked(false);
  }
  
  const togg = ()=>{
    setIsopen(false);
    setIscliked(false);
  }

  const toggler = ()=>{
    setIscliked((clicked) => !clicked);
  }
  


  

  

  return (

    <div className="all">


<div className="offer">
            <h2>20% discount and free shipping Today</h2>
        </div>


    <div className={`navbar ${isOpen ? "is-open" :''} ${isclicked ? "is-clicked" :''}`} open={open} setOpen={setOpen} >

      <div className="wrapper">

          <div className={`left ${isOpen ? "is-open" :''}`} onClick={togg} >
          <Link className ="link" to="/backbonee">BACKBONEE</Link>
          </div>
                
        <div className="center">
        <div className={`item ${isOpen ? "is-open" :''}`}>
            <Link className={`lin ${isOpen ? "is-open" :''}`} onClick={togglemenu} id="top"  to="/product/3">shop</Link>
            <Link className={`link ${isOpen ? "is-open" :''}`} onClick={togglemenu} id="top" to="/about">About</Link>
            <div className={`link ${isOpen ? "is-open" :''}`} onClick={toggler} id='top'>Support <KeyboardArrowDownIcon/>
            <div className={`supports ${isclicked ? "is-clicked" :''}`}>
              
            <Link className="stuffs" onClick={togglemenu} to='/maincontact'>Contact Us</Link>
            <Link className="stuffs" onClick={togglemenu}  to='/how'>How to use</Link>
            <Link className="stuffs" onClick={togglemenu}  to='/faq'>FAQ</Link>
            </div>
            </div>
            
          </div>
          </div>
          
        <div className="right">
          
         
          <div className="icons">
            {/* <PersonOutlineOutlinedIcon className={`cartIcon ${isOpen ? "is-open" :''}`} /> */}
            <div className={`menubar ${isOpen ? "is-open" :''}`}  onClick={togglemenu}  >
              <MenuIcon/>
            </div>
            <div className={`closebar ${isOpen ? "is-open" :''}`}  onClick={togglemenu}>
            <CloseIcon/>
            </div>
            <div className={`cartIcon ${isOpen ? "is-open" :''}`} onClick={()=>props.doit()} >
              <ShoppingCartOutlinedIcon className="carty"/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { Link } from "react-router-dom";
// import "./Navbar.scss"
// import Cart from "../Cart/Cart";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [open,setOpen] = useState(false)
//   const products = useSelector((state) => state.cart.products);

//   return (
//     <div className="navbar">
//       <div className="wrapper">
//         <div className="left">
//           <div className="item">
//             <img src="/img/en.png" alt="" />
//             <KeyboardArrowDownIcon />
//           </div>
//           <div className="item">
//             <span>USD</span>
//             <KeyboardArrowDownIcon />
//           </div>
//           <div className="item">
//             <Link className ="link" to="/products/1">Women</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/products/2">Men</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/products/3">Children</Link>
//           </div>
//         </div>
//         <div className="center">
//           <Link className ="link" to="/">LAMASTORE</Link>
//         </div>
//         <div className="right">
//           <div className="item">
//             <Link className ="link" to="/">Homepage</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/">About</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/">Contact</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/">Stores</Link>
//           </div>
//           <div className="icons">
//             <SearchIcon/>
//             <PersonOutlineOutlinedIcon/>
//             <FavoriteBorderOutlinedIcon/>
//             <div className="cartIcon" onClick={()=>setOpen(!open)}>
//               <ShoppingCartOutlinedIcon/>
//               <span>{products.length}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {open && <Cart/>}
//     </div>
//   );
// };

// export default Navbar;


