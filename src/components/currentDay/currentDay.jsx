import { useContext, useState } from 'react';
import GlobalContext from '../../context/globalContext';
import { getCurrentDayClass } from '../../utils/getDate';
import EventModal from '../eventModal/eventModal';
import './currentDay.css';
import { openModal, closeModal } from '../../utils/modalUtil';

export default function Day({ day, rowIdx }) {
  const { setSelectedDay, selectedDay,  } = useContext(GlobalContext);
  const [selectedAction, setSelectedAction] = useState(false);

  const handleActionClick = (action) => {
    openModal(action, day, () => setSelectedAction(action)); 
  };
  
  const handleCloseModal = () => {
    closeModal(() => setSelectedAction(null)); 
  };

  return (
    <div className='dayDiv'>
      <header>
        {rowIdx === 0 && (
          <p className='dayName'>{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={getCurrentDayClass(day, selectedDay)}>
          {day.format('D')}
        </p>
      </header>
      <div className='dayEventsDiv' onClick={() => {
        setSelectedDay(day);
        handleActionClick('assignment');
      }}>
      </div>
      {selectedAction && (
      <EventModal
        selectedAction={selectedAction}
        selectedDay={selectedDay}
        closeModal={handleCloseModal}
      />
    )}
    </div>
  );
}
