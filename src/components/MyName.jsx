
import '../css/myname.css'
import Fade from 'react-reveal/Fade';

const MyName = () => {
    return(
        <section className='myname' >

            <div className="container">
                
                <Fade left >
                <div className="left">
                    <h3 className='hi' > Hi There <span> ! </span></h3>
                    <h2 className='name'>  I`m <span>Emiliano Costa</span>.</h2>
                    <h1 className='full' >  Full Stack </h1>
                    <h1 className='web' >  Web Developer </h1>
                    <h2 className='designer'> <span> & </span> Multimedia Designer </h2>
                </div>
                </Fade>

                <Fade right >
                <div className="right">
                    <img src='/images/CV foto.jpeg' ></img>
                </div>
                </Fade>
                
            </div>

            <i class="fa-solid fa-arrow-down-long parpadea"></i>

        </section>
    )
}

export default MyName