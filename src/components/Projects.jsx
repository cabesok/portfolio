import { useState } from 'react';
import '../css/projects.css';
import Fade from 'react-reveal/Fade';
/* import Card from './Card'; */
import projectsdata from '../data/projectsdata';


const Projects = () => {

    const [active , setActive] = useState(0);

    function handleTouch(id){
        setActive(id)
        /* setActive(!active) */
    }

    /* let stateCheck = inactive ? 'inactive' : '' ; */

    return(
        <section className="projects" id='projects'>

            {/* <div className="space"></div> */}

            <Fade>
            <h1 className="title" > Projects </h1>
            </Fade>

            <div className="container">

            <Fade left cascade>

                {projectsdata.slice(0,3).map((project)=> {
                    
                    {/* <Card 
                    name={project.name} 
                    image={project.image} 
                    description={project.description} 
                    technologies={project.technologies} 
                    link={project.link}
                    github={project.github}
                    id={project.id}
                    ></Card> */}

                    return(
                        <>
                    <article className='card' /* onClick={()=> handleTouch(project.id)} */ >
                        <img src={project.image} alt="no img"></img>
                        <div className={`layer ${active === project.id ? 'active' : ''}`}>
                            <h3> {project.name} </h3>
                            <p className='descriptionproject' > {project.description} </p>
                            <p className='technologies' > {project.technologies}</p>
                            <div className="links">
                                <a href={project.link} target='_blank'> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
                                <a href={project.github} target='_blank'> <i class="fa-brands fa-github"></i> </a>
                            </div>
                        </div>
                    </article>

                    <article className='card dos' onClick={()=> handleTouch(project.id)} >
                        <img src={project.image} alt="no img"></img>
                        <div className={`layer ${active === project.id ? 'active' : ''}`}>
                            <h3> {project.name} </h3>
                            <p className='descriptionproject' > {project.description} </p>
                            <p className='technologies' > {project.technologies}</p>
                            <div className="links">
                                <a href={project.link} target='_blank'> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
                                <a href={project.github} target='_blank'> <i class="fa-brands fa-github"></i> </a>
                            </div>
                        </div>
                    </article>
                    </>
                    )
                })}

                </Fade>
                
            </div>

            <div className="container">

            <Fade left big cascade>

                {projectsdata.slice(3,6).map((project)=> {

                    return(
                    <>    
                    <article className='card' /* onClick={()=> handleTouch(project.id)} */ >
                        <img src={project.image} alt="no img"></img>
                        <div className={`layer ${active === project.id ? 'active' : ''}`}>
                            <h3> {project.name} </h3>
                            <p className='descriptionproject' > {project.description} </p>
                            <p className='technologies' > {project.technologies}</p>
                            <div className="links">
                                <a href={project.link} target='_blank'> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
                                <a href={project.github} target='_blank'> <i class="fa-brands fa-github"></i> </a>
                            </div>
                        </div>
                    </article>

                    <article className='card dos' onClick={()=> handleTouch(project.id)} >
                        <img src={project.image} alt="no img"></img>
                        <div className={`layer ${active === project.id ? 'active' : ''}`}>
                            <h3> {project.name} </h3>
                            <p className='descriptionproject' > {project.description} </p>
                            <p className='technologies' > {project.technologies}</p>
                            <div className="links">
                                <a href={project.link} target='_blank'> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
                                <a href={project.github} target='_blank'> <i class="fa-brands fa-github"></i> </a>
                            </div>
                        </div>
                    </article>
                    </>
                    )
                })}

            </Fade>
                
            </div>

        </section>
    )
}

export default Projects