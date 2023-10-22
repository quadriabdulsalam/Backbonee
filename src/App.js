// import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet, createHashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Maincontact from "./pages/Maincontact/Maincontact";
import Faq from "./pages/Faq/Faq";
import "./app.scss";
import Terms from './pages/terms/terms';
import Returns from './pages/return/return'
import Shipping from './pages/shipping/shipping';
import Privacy from './pages/privacy/privacy';
import About from './pages/about/about';
import How from './pages/How/How'
import Youvid from "./pages/Youvid/Youvid";
import Youvidi from "./pages/Youvid2/Youvidi";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import React from "react";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";





// const AnotherComponent = props => {
//   return <button onClick={props.doIt}></button>
// }


function App() {


  const Layout = () => {

   
    // const [show, setShow] = useState(false);
    // function Fun(){
    //   setShow(!show)
    //   console.log(show)
    // }
  
    // if (App = Home){
    //   console.log('home')
    //   alert('home')
    // }else{
    //   alert('failed')
    // }
  
    
    return (
      <div className="app">
        
        <Navbar doit={() => Fun()} />
        <Outlet />
        <Contact/>
        <Footer />
        
      </div>
    );
  };
  







console.log()





  const [show, setShow] = useState(false);
  function Fun(){
    setShow(!show)
    console.log(show)

    return(
      {Cart}
    )
    

  }
  
  
  
  const router = createHashRouter([
    
    
    {
      path: "/",
      element: <Layout  />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/backbonee",
          element:<Home/>,
        },
        {
          path: "/nav",
          element: <Navbar  />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product doit={() => Fun()} />,
        },
        {
          path: "/maincontact",
          element: <Maincontact/>
        },
        {
          path: '/faq',
          element: <Faq/>
        },
        {
          path: '/terms',
          element: <Terms/>
        },
        {
          path: '/return',
          element: <Returns/>
        },
        {
          path: '/shipping',
          element: <Shipping/>
        },
        {
          path: '/privacy',
          element: <Privacy/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/how',
          element: <How/>
        },
        {
          path: '/youvid',
          element: <Youvid/>
        },
        {
          path: '/youvidi',
          element: <Youvidi/>
        },
      ],
    },
  ] 
   );




  return (
    
 
    <div>
      <RouterProvider router={router}/>
      {show && <Cart doit={() => Fun()}/>}
    </div>
  
    
  );
}

export default App;
