import { useState, useContext, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import EventForm from './event';
import AssignmentForm from './assignment';
import './eventModal.css';
import dayjs from 'dayjs';
import GlobalContext from '../../context/globalContext';

export default function EventModal({ selectedAction, selectedDay }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { showEventModal, setShowEventModal } = useContext(GlobalContext);

  const displayDate = selectedDay ? selectedDay : dayjs();

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null); // Reset selectedEvent when modal is closed
    }
  }, [showEventModal]);

  const handleCloseModal = () => {
    setShowEventModal(false);
  };

  return (
    <div className="modalWrapper" onClick={handleCloseModal}>
      <div className='modal'>
        <header>
          <AiOutlineClose onClick={handleCloseModal} />
        </header>
        <div className='modalBody'>
          {selectedAction === 'event' && <EventForm />}
          {selectedAction === 'assignment' && <AssignmentForm />}
          <div className='selectedDate'>
            <BiTime />
            <p>{displayDate.format('dddd D, MMMM YYYY')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
