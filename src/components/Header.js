import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='header__menu'>
        <div className='logo__wrapper'>
            <span className='logo'>House staff</span>
        </div>
        <nav className='menu'>
            <ul className='menu__item'>
                <li className='menu__list'><a href='index.html' className='menu__link'>Home</a></li>
                <li className='menu__list'><a href='index.html' className='menu__link'>About</a></li>
                <li className='menu__list'><a href='index.html' className='menu__link'>Contact</a></li>

            </ul>

        </nav>


        </div>
      
        <div className='presentation'>
          
        </div>
    </header>
  )
}
