import React from 'react'

function Header({name, navItems}) {
    // console.log(navItems);

  return (
    <header>
        <div>{name}</div>
    </header>
  )
}

export default Header