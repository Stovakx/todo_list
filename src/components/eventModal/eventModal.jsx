import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import AssignmentForm from './assignment';
import './eventModal.css';
import dayjs from 'dayjs';
import GlobalContext from '../../context/globalContext';



export default function EventModal({ selectedAction, selectedDay, closeModal }) {
  const [, setSelectedEvent] = useState(null);
  const { showEventModal, setShowEventModal } = useContext(GlobalContext);

  const displayDate = selectedDay ? selectedDay : dayjs();

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  //close modal funkce
  const handleCloseModal = () => {
    closeModal(setShowEventModal);
  };

  // Zabránění zavření modalu při kliknutí na .modal
  const handleModalClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div className="modalWrapper" onClick={handleCloseModal}>
      <div className='modal' onClick={handleModalClick}>
        <header>
          <AiOutlineClose onClick={handleCloseModal} />
        </header>
        <div className='modalBody'>
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

EventModal.propTypes = {
  selectedAction: PropTypes.string,
  selectedDay: PropTypes.any,
  closeModal: PropTypes.func,
};
