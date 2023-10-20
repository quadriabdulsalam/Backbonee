import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import guarantee from '../../img/bjk.webp';
import pia from '../../img/pia.png';
import pib from '../../img/pib.png';
import pic from '../../img/pic.png';
import pid from '../../img/pid.png';
import pie from '../../img/pie.png';
import pif from '../../img/pif.png';
import pig from '../../img/pig.png';
import pih from '../../img/pih.png';
import pii from '../../img/pii.png';
import pij from '../../img/pij.png';
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/Cart";
import Contact from '../../components/Contact/Contact'






const Product = (props) => {


  


  

  





  


  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const [color, setColor ] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  function cchanger(event) {
    setColor(event.target.value)
  }

  function schanger(event) {
    setSize(event.target.value)
  }


  let [info, setInfo] = useState('')

  fetch('https://api.ipify.org/?format=json')
    .then(results => results.json())
    .then(data => setInfo(data.ip))

    
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
    <div className="prod">

    <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <div className="prices">
            <span className="oprice">${data?.attributes?.price+10}  </span>
            <span className="price">${data?.attributes?.price}</span>
            
            
                </div>
            <div className="propro">

              <div className="cpo">

              <label for="color">Color:</label>
              <select name="color" onChange={cchanger} >
              <option value="black">black</option>
              <option value="grey">grey</option>
              <option value="pink">pink</option>
              </select>
              
              </div>

              <div className="spro">

              <label for="size">Size:</label>
              <select name="size" onChange={schanger} >
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XLy</option>
              <option value="xxl">XXL</option>
              </select>

              </div>

            </div>

              {/* <ul>
                <li>black</li>
                <li>pink</li>
                <li>grey</li>
              </ul> */}

           

            {/* <p>{data?.attributes?.desc}</p> */}
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                    color,
                    size,
                    info,
                  }) 
                ) && props.doit()
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            
            <h1></h1>
            <img src={guarantee} alt=""/>
            <div className="links">
    
              <pre>{data?.attributes?.desc}</pre>
            </div>
            <div className="info">
              <span>Vendor: BackBonee</span>
              <span>Product Type:Posture Corrector</span>
              <span>Tag: BBE</span>
            {/* </div> */}
            <hr />
            {/* <div className="info"> */}
            <span>✅Shipping:</span>
                    <p>Free World Wide Shipping On All Orders.</p>
                    <p>  United States Standard Shipping (7-15 days) </p>

                    <p> We will ship your order (Dispatch) within 3-5 Working Days</p>
                    <p>after receiving your verified payment (Excluding Weekends</p>
                    <p>and Public Holidays).</p>

                    <p>This item should arrive in 7 -15 Days from the dispatched date.</p>
                    <p> Guaranteed safe and secure checkout.</p>
                    <p> We have 24/7/365 Ticket and Email Support. Please contact us if you need assistance.</p>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ: Your Posture Questions, Answered</span>
                  <span>  Exercise-Friendly: Can I wear it during workouts?</span>
                 <span>   Absolutely! Our posture corrector guides your form,</span>
                   <span>  activating muscles and straightning your back</span>
                   <span>.</span>
            </div>

            <div className="infos">
              <p>.</p>
            </div>
          </div>


    </div>



          <div className="imgre">
          <div className="scroll">
              <img src={pia} alt=""/>
            </div>
            <div className="scrolla">
              <img src={pib} alt=""/>
            </div>
            <div className="scrollb">
              <img src={pic} alt=""/>
            </div>
            <div className="scrollc">
              <img src={pid} alt=""/>
            </div>
            <div className="scrolld">
              <img src={pie} alt=""/>
            </div>
            <div className="scrolle">
              <img src={pif} alt=""/>
            </div>
            <div className="scrolle">
              <img src={pig} alt=""/>
            </div>
            <div className="scrolle">
              <img src={pih} alt=""/>
            </div>
            <div className="scrolle">
              <img src={pii} alt=""/>
            </div>
            <div className="scrolle">
              <img src={pij} alt=""/>
            </div>
            </div>
           
            
            
        </>
        
      )}
       
    </div>
  );
};

export default Product;
