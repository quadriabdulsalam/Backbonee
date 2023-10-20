import React from 'react'
import './Videobox.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import shn from '../../img/shn.png';
import slid from '../../img/ba.png';
import slide from '../../img/BD.PNG';


function Videobox() {
    return (
      <>
       <Link to='/product/3'> <div className='containers'>
            <div className='left'>
                <h1>Posture Corrector</h1>
                <span>
                
                <TypeAnimation
      sequence={[
        ' Correct Your Posture', // Types 'One'
        3000, // Waits 1s
        'You only need to wear the posture support brace for 30 minute a day for the first week to start feeling the amazing benefits.', // Types 'One'
        3000, // Waits 1s
        ' BackBonee Posture Corrector Back Support is the perfect tool to regain your perfect posture.', // Deletes 'One' and types 'Two'
        3000, 
        'An upright posture prevents back problems and looks self-confident and energetic.', // Deletes 'One' and types 'Two'
        3000, 
        ' Upper Back Pain Relief. Wearing the back straightener for some time produces muscle memory, which means you can keep your back straight even without a posture correction device. A comfortable effective and adjustable back brace can solve humpback or neck pain.', // Deletes 'One' and types 'Two'
        3000, 
        ' Strengthen Muscles and Improves Balance. The posture brace helps to eliminate back, shoulder, neck pain and lumbar pain, sprains and muscle spasms, to strengthen your muscles, improves balance and flexibility, and prevent further damage.', 
        2000
      ]}

      

   
    
     
      
     
      
     

      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                </span>
            </div>
            <div className="centers">
                  <button > SHOP NOW</button>
            </div>
            <div className='right'>
            <img
            src={shn}
            alt=""
          />
            </div>
        </div>
        </Link>
        <div className="containerv">

        <Link className="leftv" to='/youvid'>
        <img src={slid}/>
          <PlayCircleOutlineIcon className='play' />
        </Link>

        <Link className="rightv" to='youvidi'>
        <img src={slide}/>
          <PlayCircleOutlineIcon className='play'/>
        </Link>

        


          {/* <div className="leftVideo">
           
          <img  src="https://outperformsports.com/wp-content/uploads/2022/11/how-to-hold-a-shot-put-1-640x426.jpg"/>
        
          <PlayCircleOutlineIcon className='play'/>
          </div>
          <div className="rightVideo">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fz8bwvn9lA4?si=eCywegmReDBv10oF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> */}
        </div>


        </>
    )
}

export default Videobox



// <div className="videoboxcontainer">
// <div className="leftVideo">
// <iframe width="560" height="315" src="https://www.youtube.com/embed/aZfz3Q1sdmY?si=tPMhs138p60KPtpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// </div>
// <div className="rightVideo">
// <iframe width="560" height="315" src="https://www.youtube.com/embed/fz8bwvn9lA4?si=eCywegmReDBv10oF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// </div>
// </div>


// <div className="videoboxcontainerb">
// <div className="leftVideoa">
// <iframe width="400" height="224" src="https://www.youtube.com/embed/aZfz3Q1sdmY?si=tPMhs138p60KPtpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// </div>
// <div className="rightVideob">
// <iframe width="400" height="224" src="https://www.youtube.com/embed/fz8bwvn9lA4?si=eCywegmReDBv10oF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// </div>
// </div>


// <div className="mobile">
// <div className="leftVideomo">
// <iframe width="300" height="168" src="https://www.youtube.com/embed/aZfz3Q1sdmY?si=tPMhs138p60KPtpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// </div>
// <div className="rightVideomo">
// <iframe width="300" height="168" src="https://www.youtube.com/embed/fz8bwvn9lA4?si=eCywegmReDBv10oF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// </div>
// </div>
// </>
// )
// }

// export default Videobox
