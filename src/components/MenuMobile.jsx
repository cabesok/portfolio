import React from 'react'
import '../css/menumobile.css';


const MenuMobile = (props, handleClick={handleClick}) => {

    const links = [
        { id: 1, text: "About me", href: "#about" },
        { id: 2, text: "Skills", href: "#skills" },
        { id: 3, text: "Projects", href: "#projects" },
        { id: 4, text: "Contact", href: "#contact" }
      ];

  return (
    <div className={`menumobile ${props.hide}`} >

        
        <i class="fa-solid fa-xmark cross" onClick={props.handleClick} ></i>
        
            <ul  >
                {links.map(link => {
                    return(
                <li >
                    <a href={link.href} onClick={props.handleClick} > {link.text} </a>
                </li>

                )})}
                
            </ul>
    </div>
  )
}

export default MenuMobile