
import '../css/skills.css';
import Fade from 'react-reveal/Fade';

const Skills = () => {

    return(
        <section className='skills' id='skills'>

            {/* <div className="space"></div> */}

            <Fade>
            <h1 className="title" > Skills </h1>
            </Fade>

            <Fade>
            <div className="container">
                <span className='logos' >
                    <i class="fa-brands fa-html5"></i>
                    <h5>HTML</h5>
                </span>

                <span className='logos' >
                    <i class="fa-brands fa-css3-alt"></i>
                    <h5>CSS</h5>
                </span>

                <span className='logos' >
                    <i class="fa-brands fa-js"></i>
                    <h5>JAVASCRIPT</h5>
                </span>
                
                <span className='logos' >
                    <i class="fa-brands fa-node"></i>
                    <h5>NODE.JS</h5>
                </span>
                
                <span className='logos' >
                    <i class="devicon-express-original colored"></i>
                    <h5>EXPRESS.JS</h5>
                </span>

                <span className='logos' >
                    <i class="fa-brands fa-react"></i>
                    <h5>REACT</h5>
                </span>

                {/* <span className='logos' >
                    <i class="devicon-mysql-plain-wordmark colored"></i>
                    <h5>MySQL</h5>
                </span> */}
                
                <span className='logos' >
                    <i class="devicon-mysql-plain colored"></i>
                    <h5>MySQL</h5>
                </span>
                
                <span className='logos' >
                    <i class="devicon-sequelize-plain colored"></i>
                    <h5>SEQUELIZE.JS</h5>
                </span>
                
                {/* <i class="devicon-sequelize-plain-wordmark colored"></i> */}

                <span className='logos' >
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    <h5>REST API</h5>
                </span>
                
                <span className='logos' >
                    <i class="devicon-git-plain colored"></i>
                    <h5>GIT</h5>
                </span>

                <span className='logos' >
                    <i class="devicon-github-original colored"></i>
                    <h5>GITHUB</h5>
                </span>

                <span className='logos' >
                    <i class="devicon-materialui-plain colored"></i>
                    <h5>MATERIAL UI</h5>
                </span>
                
                <span className='logos' >
                    <i class="devicon-vscode-plain colored"></i>
                    <h5>VSCODE</h5>
                </span>

                <span className='logos' >
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <h5>RESPONSIVE</h5>
                    <h5>DESIGN</h5>
                </span>

                <span className='logos' >
                    <i class="fa-solid fa-people-group"></i>
                    <h5>SCRUM</h5>
                </span>
            

                {/* <i class="devicon-figma-plain"></i> */}
          
                
            </div>
            </Fade>

        </section>
    )
}

export default Skills