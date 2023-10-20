import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import CloseIcon from '@mui/icons-material/Close';
import Home from "../../pages/Home/Home";

const Cart = (props) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const resete = ()=>{
    dispatch(resetCart())
  }

  // if (Home) {
  //   dispatch(resetCart())
  // }


  // const fun = () =>{
  //   alert("fun function")
  // }

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51O09LEIIRFw8KX6RZlP8HTBDY2IPJhdCB6XIb7oYdm6RDEfwcWh7FPU7qsGG2yZal9in3qU4TGJ3sfcnobU0JZro00HBT8RB5r"
  );

// loadStripe('pk_test_mystripekey').then(
//   stripe => this.stripe = stripe
// ).then(
//   () => this.createStripeSession()
// )



  const handlePayment = async () => {
    
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products, 
      } ) 
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      }) 
      

    } catch (err) {
      console.log(err);
    }
    
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 30)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
     
     
      <div className="flexer">
        
      <span className="reset" onClick={resete}>
        
        Reset Cart
      </span>
      <CloseIcon className="close" onClick={()=>props.doit()}/>
      </div>
      
      
    </div>
  );
};

export default Cart;
