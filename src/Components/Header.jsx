import React from 'react'
import siteLogo from '../assets/chef-mistral-icon.png'

function Header() {
    return (
        <header className='flex justify-center items-center gap-3 h-20 shadow bg-white'>
            <img src={siteLogo} className='w-12'/>
            <h1 className="font-Inter text-3xl">Chef Mistral</h1>
        </header>
    )
}

export default Header