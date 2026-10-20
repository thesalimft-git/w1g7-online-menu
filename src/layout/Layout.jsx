import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
        <h1>Top bar</h1>

        <div>
            { children }
        </div>

        <h1>mobile menu</h1>
    </div>
  )
}
