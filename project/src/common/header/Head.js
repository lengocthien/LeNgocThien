import React from 'react'
import { Link } from "react-router-dom"

export const Head = () => {
  return (
    <>
    <section className='head'>
      {/* ----------------icon------------- */}
        <div className="container d_flex">
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+12345678</label>
            <i className='fa fa-envelope'></i>
            <label>Arrid@gmail.com</label>

          </div>
          <div className='right  now RText'>
            <label>Theme FAQ'S</label>
            <label>Need Helps</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor=''>EN</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor=''>USD</label>
            
            <Link to='/login'>
            <label>Đăng Nhập</label>
            </Link>
            <Link to='/Register'>
            <label>Đăng kí</label>
            </Link>
            
          </div>
        </div>
    </section>
    </>
  )
}
export default Head
