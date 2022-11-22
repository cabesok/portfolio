
import { useState } from 'react';
import '../css/aboutme.css';
import Switch from './Switch';
import Switch2 from './Switch2';
import Fade from 'react-reveal/Fade';


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

                <img src='/images/CV foto.jpeg' className={`${inactive ? 'inactive' : ''}`}/>

                <div className={`right ${inactive ? 'inactive' : ''}`}>

                <div className='text' >
                    
                    <p>   I have a passion for music and computers since I was a kid. </p>
                    <p>   I first started my professional career as a sound engeneer in a recording studio. And rapidly developed into my other passion, digital multimedia design. </p>
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
                            <img src='images/digitalhouse.jpg' alt='logo' />
                            <p>Digital House - Full Stack Web Developer</p>
                        </div>

                        <div className="careers">
                            <img src='images/ucsf.jpg' alt='logo' />
                            <p>UCSF - Audio and Image Design Technician</p>
                        </div>

                        <div className="careers">
                            <img src='images/cetear.jpg' alt='logo' />
                            <p>CETeAr - Sound Engineer</p>
                        </div>

                        <div className="careers">
                            <img src='images/cambridge.jpg' alt='logo' />
                            <p className='cambridge' >Cambridge - "Examination for the Certificate of Competency in English" (E.C.C.E.)</p>
                        </div>

                        <div className="careers">
                            <img src='images/alicana.jpg' alt='logo' />
                            <p>A.L.I.C.A.N.A. - English Course</p>
                        </div>

                        <div className="careers">
                            <img src='images/escueladelaplaza.jpg' alt='logo' />
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