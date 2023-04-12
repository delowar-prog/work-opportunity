import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='p-5 md:p-20 bg-slate-700 text-white footer-section'>
      <div>
        <h1 className='text-xl font-bold mb-3'>WorkOpportunity</h1>
        <p className='my-3'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
        <div className='flex gap-2'>
          <img className='w-10 h-10 rounded-full' src='images/facebook.png'></img>
          <img className='w-10 h-10 rounded-full' src='images/twitter.png'></img>
          <img className='w-10 h-10 rounded-full' src='images/instagram.jpg'></img>
        </div>
      </div>
      <div>
        <h1 className='text-lg font-bold mb-3'>Company</h1>
        <p className='my-2'>About Us</p>
        <p className='my-2'>work</p>
        <p className='my-2'>Latest News</p>
        <p className='my-2'>Careers</p>
      </div>
      <div>
        <h1 className='text-lg font-bold mb-3'>Product</h1>
        <p className='my-2'>Prototype</p>
        <p className='my-2'>Plans & Pricing</p>
        <p className='my-2'>Customers</p>
        <p className='my-2'>Integrations</p>
      </div>
      <div>
        <h1 className='text-lg font-bold mb-3'>Support</h1>
        <p className='my-2'>Help Desk</p>
        <p className='my-2'>Sales</p>
        <p className='my-2'>Become a Partner</p>
        <p className='my-2'>Developers</p>
      </div>
      <div>
        <h1 className='text-lg font-bold mb-3'>Contact</h1>
        <p className='my-2'>524 Broadway , NYC</p>
        <p className='my-2'>+1 777 - 978 - 5570</p>
      </div>
    </div>
  )
}

export default Footer