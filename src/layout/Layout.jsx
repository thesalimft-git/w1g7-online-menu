import React from 'react'
import MobileMenu from './components/MobileMenu'

export default function Layout({ children }) {
  return (
    <div>
        {/* <h1>Top bar</h1> */}
        <div>
            { children }
        </div>
        <div className='bg-danger'>
            <MobileMenu/>
        </div>
    </div>
  )
}
