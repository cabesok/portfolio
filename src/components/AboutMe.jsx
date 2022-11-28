
import { useState } from 'react';
import '../css/aboutme.css';
import Switch from './Switch';
import Switch2 from './Switch2';
import Fade from 'react-reveal/Fade';

import cv from './images/fotoportfolio7.jpg';
import digitalhouse from './images/digitalhouse.jpg';
import ucsf from './images/ucsf.jpg';
import cetear from './images/cetear.jpg';
import cambridge from './images/cambridge.jpg';
import alicana from './images/alicana.jpg';
import escueladelaplaza from './images/escueladelaplaza.jpg';



const AboutMe = () => {

    const [inactive , setInactive] = useState(false)

    function handleClick(){
        setInactive(inactive => !inactive)
    }

    let stateCheck = inactive ? 'inactive' : '' ;
    


    return(
        <section className='aboutme' id='about' >

            {/* <div className="space"></div> */}

            <Fade>
            <h1 className='title' > About Me </h1>
            </Fade>

            <Fade bottom>
            <div className='details' >

                <img src={cv} className={`${inactive ? 'inactive' : ''}`}/>

                <div className={`right ${inactive ? 'inactive' : ''}`}>

                <div className='text' >
                    
                    <p>   I'm an enthusiastic about music and computers since I was a kid. </p>
                    <p>   I first started my professional career as a sound engeneer in a recording studio. And I rapidly introduced into my other passion, digital multimedia design. </p>
                    {/* <p>   I studied Fullstack Development while I worked on a TV studio editing and airing a daily news program. </p> */}
                    <p>   Nowadays I dedicate myself exclusively to developing code for web aplications and digital products. </p>
                    <p> I would really like to join a tech company where I can apply my knowledge and develop my professional career.</p>
                </div>

                    {/* <div className='icons' >
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div> */}
                
                </div>

                <div className={`right ${!inactive ? 'inactive' : ''}`} >

                   <article className='education' >

                        <div className="careers">
                            <img src={digitalhouse} alt='logo' />
                            <p>Digital House - Full Stack Web Developer</p>
                        </div>

                        <div className="careers">
                            <img src={ucsf} alt='logo' />
                            <p>UCSF - Audio and Image Design Technician</p>
                        </div>

                        <div className="careers">
                            <img src={cetear} alt='logo' />
                            <p>CETeAr - Sound Engineer</p>
                        </div>

                        <div className="careers">
                            <img src={cambridge} alt='logo' />
                            <p className='cambridge' >Cambridge - "Examination for the Certificate of Competency in English" (E.C.C.E.)</p>
                        </div>

                        <div className="careers">
                            <img src={alicana} alt='logo' />
                            <p>A.L.I.C.A.N.A. - English Course</p>
                        </div>

                        <div className="careers">
                            <img src={escueladelaplaza} alt='logo' />
                            <p>Escuela De La Plaza - Bilingual High School</p>
                        </div>

                    </article>

                </div>

            </div>
            </Fade>
            
            {/* <Switch handleClick={handleClick} /> */}
            <Switch2 handleClick={handleClick} />
        </section>

    )
}

export default AboutMe