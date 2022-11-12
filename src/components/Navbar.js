import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-between px-5'>
            <div>AnteLangga</div>
            <ul className='flex'>
                <li>Home</li>
                <li>Buy</li>
                <li>About</li>
                <li>Pricing</li>
            </ul>
            <div className='flex'>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div>
    </div>
  )
}
