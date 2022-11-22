import React from 'react';
import '../css/switch2.css';
/* import { useState } from 'react'; */

const Switch2 = (props) => {

  return (
    <div className="switchcontainer">
    <label className='switch2' >
        <input type='checkbox' ></input>
        <span className='slider2' onClick={props.handleClick} ></span>
        <i class="fa-solid fa-user-large left2"></i>
        <i class="fa-solid fa-graduation-cap right2"></i>
        {/* <i class="fa-solid fa-user-graduate"></i> */}
        {/* <i class="fa-solid fa-book-open"></i> */}
        {/* <i class="fa-solid fa-laptop-code"></i> */}
    </label>
    </div>
  )
}

export default Switch2