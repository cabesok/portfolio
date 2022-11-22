import {useState} from "react";
import '../css/header.css';
import MenuMobile from './MenuMobile';


const Header = () => {

    const links = [
        { id: 1, text: "About me", href: "#about" },
        { id: 2, text: "Skills", href: "#skills" },
        { id: 3, text: "Projects", href: "#projects" },
        { id: 4, text: "Contact", href: "#contact" }
      ];

      const [active, setActive] = useState();
      const [hide, setHide] = useState(true);

      const handleClick = (e) => {
        setHide(!hide)
      }

    return(
        <div className="header" >

            <i class="fa-solid fa-bars burger" onClick={handleClick} ></i>

            <i class="fa-solid fa-code"></i>

            <ul className="ul" >
                {links.map(link => {
                    return(
                <li >
                    <a className={`${active === link.id ? "active" : ""}`} 
                        href={link.href} 
                        onClick={() => setActive(link.id)}
                        > 
                        {link.text} </a>
                </li>

                )})}
                
            </ul>

            <MenuMobile hide={hide ? 'hide' : ''} handleClick={handleClick} />

            {/* <ul  >
                <li >
                    <a className='active' href="#about" > About me </a>
                </li>
                <li>
                    <a className='' href="#skills" > Skills </a>
                </li>
                <li>
                    <a className='' href="#projects" > Projects </a>
                </li>
                <li>
                    <a className='' href="#contact" > Contact </a>
                </li>
            </ul> */}

        </div>
    )
}

export default Header