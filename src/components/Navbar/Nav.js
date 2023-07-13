import React from 'react'
import Switcher from '../../utils/Switcher'


function Nav(props) {
  return (
    <nav className='px-8 z-10 fixed top-0 flex items-center justify-between text-pink-500 backdrop-blur-lg bg-opacity-50 font-semibold text-lg shadow-lg lg py-1'>
      <div>
          <a href="#home" class="flex items-center space-x-4">
              <img src="https://cdn.cdnlogo.com/logos/s/43/susy.svg" class="h-8" alt="My Logo" />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shweta Rai</span> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap">Shweta Rai</span>
          </a>
      </div>
      <ul className="hidden lg:flex justify-end mx-52 space-x-20">
        <li className='cursor-pointer my-4 hover:text-pink-300'><a href='#home'>Home</a></li>
        <li className='cursor-pointer my-4 hover:text-pink-400'><a href='#about'>About</a></li>
        <li className='cursor-pointer my-4 hover:text-pink-400'><a href='#project'>Project</a></li>
        <li className='cursor-pointer my-4 hover:text-pink-400'><a href='#contact'>Contact</a></li>
        <li className='cursor-pointer my-4 hover:text-pink-400'><a href='#blog'>Blog</a></li>
      </ul>

      {/* <input type='checkbox' onChange={() => {
        if (props.theme == "light")
          props.themeCallBack("dark") // just added props n nothing else
        else if (props.theme == "dark")
          props.themeCallBack("light")
      }} checked={props.theme == "dark"} /> */}

      {/* TODO: Check this change, I have created the separate component for the toggle switch button inside the /utils folder */}
      <Switcher mode={props.theme} onChange={(theme) => {
        console.log("this is switcher ", theme)
        if (theme === "light")
          props.themeCallBack("light")
        else if (theme === "dark")
          props.themeCallBack("dark")
      }} />
    </nav>
  )
}

export default Nav