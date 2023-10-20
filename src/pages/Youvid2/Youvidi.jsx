import React from 'react'
import './Youvidi.scss'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
function Youvid() {
    return (
        <div className='fpage'>
         <Link to='/' ><CloseIcon className='canc'/></Link>

        <div className="fvideo">
        
       
        <iframe width="70%" height="507" src="https://www.youtube.com/embed/nMH0x3ZweaQ" title="GET YOURS TODAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>

        <div className="mvideo">
        <iframe width="400" height="222" src="https://www.youtube.com/embed/nMH0x3ZweaQ" title="GET YOURS TODAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        </div>
    )
}

export default Youvid
