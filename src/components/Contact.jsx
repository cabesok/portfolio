
import '../css/contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => {

    return(
        <div className='contact' id='contact'>

            <Fade>
            <h1 className="title" > Contact </h1>
            </Fade>

            <Fade>
            <div className="infocontainer">
                <form className="form" >
                    <input placeholder='  Your Name...' ></input>
                    <input placeholder='  Your Email...' ></input>
                    <textarea placeholder='Message ...' ></textarea>
                    <button type='submit' > Get in touch </button>
                </form>
            

                <div className="info">
                    <p> If you have any questions about me or my projects drop me a comment. </p>
                    <p> I'm available.  </p>
                    <p> Or try a straight shot to my inbox: </p>
                    <p> <b> cabesok@gmail.com </b> </p>
                </div>

            </div>
            </Fade>


        </div>
    )
}

export default Contact