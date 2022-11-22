import React from 'react';
import '../css/switch.css';
import { useState } from 'react';

const Switch = (props) => {

  return (
    <label className='switch' >
        <input type='checkbox' ></input>
        <span className='slider' onClick={props.handleClick} ></span>
        <i class="fa-solid fa-user-large right"></i>
        <i class="fa-solid fa-graduation-cap left"></i>
        {/* <i class="fa-solid fa-user-graduate"></i> */}
        {/* <i class="fa-solid fa-book-open"></i> */}
        {/* <i class="fa-solid fa-laptop-code"></i> */}
    </label>
  )
}

export default Switch