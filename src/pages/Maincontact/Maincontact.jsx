import React from 'react'
import './Maincontact.scss'

function Maincontact() {
    return (
        <div className='contain'>
        <h1 className='contacts'>
            Contact
        </h1>
        <form action='https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927' method='POST' encType='multipart/form-data'>
            <div className='items' >
                <div className='nameses'>
                    <label className='Label' >Name</label>
                    <input className='nameInput' type='text' name='name'/>
                </div>
                <div className='names' >
                    <label className='Label' >Phone Number</label>
                    <input className='nameInput' type='text' name='phone'/>
                </div>
                </div>
                <div className='named'>
                    <label className='Label' >Name</label>
                    <input className='Input' type='text' name='namemobile'/>
                </div>
                <div className='named'>
                    <label className='Label' >Email</label>
                    <input className='Input' type='name' name='phonemobile'/>
                </div>
                <div className='name'>
                    <label className='Label' >Email</label>
                    <input className='Input' type='email' name='email'/>
                </div>
                <div className='name' >
                    <label className='Label' >Subject</label>
                    <input className='Input' type='text' name='subject'/>
                </div>
                <div className='name'>
                    <label className='Label'>Message</label>
                    <textarea className='InputM' rows='10' name='message'></textarea>
                </div>
                <div className="nameM">
                <button className='button' href='#main' >
                    Send Message
                </button>
                </div>
           
        </form>

    </div>
    )
}

export default Maincontact
