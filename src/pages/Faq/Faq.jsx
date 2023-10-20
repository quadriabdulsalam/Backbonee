import React from 'react'
import './Faq.scss'

function Faq() {

    return (
    <div>
      <h1 className='faq'>FAQ</h1>
      <div className="listss">

        <div className="itemses">
            <h4>What currency are the prices I see on the site?</h4>
            <p>All prices are in USD.</p>
        </div>

        <div className="itemses">
            <h4>I just placed an order, when will it ship?</h4>
            <p>We try our best to ship items as fast as we can. Please allow 24-48 hours of processing time for your order to ship out. Average shipping times are 8 -15 days worldwide. If you have any questions, email us at <a href='mailto:backbonee4@gmail.com' >BackBonee@gmail.com</a>.</p>
        </div>

        <div className="itemses">
            <h4>I am not in love with my order, can it be returned? What if there is an issue?</h4>
            <p>We offer a 100 % money back guarantee only if you receive the product defective or damaged. We give you 60 days to send it back to us for a full refund. You must ship it back at your own expense, once we have received the product, we will refund the full amount of your original purchase. Please Include all a name and order numbers on the returned parcels.

Please note: If your package is on the way, you must wait for it to arrive and return it before receiving a refund.</p>
        </div>

        <div className="itemses">
            <h4>Can I cancel my order?</h4>
            <p>You are able to cancel your order with no penalty! You must cancel your order before it ships.</p>
        </div>

        <div className="itemses">
            <h4>I have entered an incorrect address what do I do now?</h4>
            <p>If you have miss spelled or auto-filled in an incorrect address, wait for your order confirmation email. Once you double-check if the address given is wrong kindly notify us via email at <a href='mailto:backbonee4@gmail.com' >BackBonee@gmail.com</a>. If the given address is wrong, we can change the address to the correct one within 24 hours. No refund will be given after 24 hours of incorrect submission.

</p>
        </div>

        <div className="itemses">
            <h4>I have a question that wasn't answered, can you please help?</h4>
            <p>Absolutely! We are here for you! Please send us an email at <a href='mailto:backbonee4@gmail.com' >BackBonee@gmail.com</a> and we will be happy to assist you in any way we can.

We do receive a large number of emails, If you wish to get a prompt response please attach your order number and address the problem clearly, thank you.</p>
        </div>

      </div>
    </div>
    
  )
}

export default Faq
