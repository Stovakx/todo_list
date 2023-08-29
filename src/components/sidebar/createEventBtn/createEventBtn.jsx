import React from 'react';
import {BsPlus} from 'react-icons/bs';
import {AiFillCaretDown} from 'react-icons/ai'
import './createEventBtn.css';

export default function CreateEventBtn() {
  return (
    <button className='createEventBtn'>
        <BsPlus/>
        <span>Create</span>
        <AiFillCaretDown/>
    </button>
  )
}
