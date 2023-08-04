import React from 'react'

function MenuContainers({link,icon}) {
  return (
   <li>
    <a href={link} src="">
        <span className="icon">{icon}</span>
    </a>
    </li>
  )
}

export default MenuContainers
