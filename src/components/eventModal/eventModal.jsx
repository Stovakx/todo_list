import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {BiTime} from 'react-icons/bi';
import EventForm from './event';
import AssignmentForm from './assignment';

import './eventModal.css';
import GlobalContext from '../../context/globalContext';

export default function EventModal({ selectedAction, closeModal }) {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [ selectedDay,setSelectedDay ] = useContext(GlobalContext);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
            };
    }, [closeModal]);

    return (
        <div className='modal'>
        <header>
            <AiOutlineClose onClick={closeModal} />
        </header>
        <div className='modalBody'>
            {selectedAction === 'event' && <EventForm />}
            {selectedAction === 'assignment' && <AssignmentForm />}
            <div>
            <BiTime/>
            <p>{selectedDay.format("dddd, MMMM YYYY")}</p>
            </div>
        </div>
        </div>
    );
}
