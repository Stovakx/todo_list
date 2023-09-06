import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/globalContext';
import { getCurrentDayClass } from '../../utils/getDate';
import EventModal from '../eventModal/eventModal';
import './currentDay.css';
import { openModal, closeModal } from '../../utils/modalUtil';
import dayjs from 'dayjs';

export default function Day({ day, rowIdx }) {
  const { setSelectedDay, selectedDay, savedAssignments } = useContext(GlobalContext);
  const [selectedAction, setSelectedAction] = useState(false);
  const [dayAssignments, setDayAssignments] = useState([]);

  const handleActionClick = (action) => {
    openModal(action, day, () => setSelectedAction(action)); 
  };
  
  const handleCloseModal = () => {
    closeModal(() => setSelectedAction(null)); 
  };

  useEffect(() => {
    const assignments = savedAssignments.filter((evt) =>
    dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
  );
  setDayAssignments(assignments);
  }, [savedAssignments, day]);
  
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
      {dayAssignments.map((evt, idx) => (
        <div className='assignmentInDay' key={idx}>
          <p>{evt.assignmentName}</p>
        </div>
      ))}
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
