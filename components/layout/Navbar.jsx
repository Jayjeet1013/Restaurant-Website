import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
  <div className='flex justify-between '>
    <div>
      GERICHT
    </div>

    <div className='flex'>
<ul className='flex justify-between '>
  <li>HOme</li>
  <li>Pages</li>
  <li>Contact Us</li>
  <li>Blog</li>
  <li>Landing</li>
</ul>
    </div>


    <div>
      Login
    </div>
  </div>
</div>
  )
}

export default Navbar