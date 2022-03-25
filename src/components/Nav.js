import React from 'react'

const Nav = (props) => {
  const {
    setAboutSelected,
    setContactSelected
  } = props

  return (
    <header>
      <p>Alfonso Fernandez</p>
      <nav>
        <ul>
          <li>
            <a href="#projects">
              <span onClick={() => setAboutSelected(false)}>Projects</span>
            </a>
          </li>
          <li className='mx-2'>
            <a href="#about">
              <span onClick={() => setAboutSelected(true)}>About Me</span>
            </a>
          </li>
          <li className='mx-1'>
            <a href='#contact'>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav