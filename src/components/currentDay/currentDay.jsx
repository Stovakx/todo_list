import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/globalContext';
import { getCurrentDayClass } from '../../utils/getDate';
import EventModal from '../eventModal/eventModal';
import './currentDay.css';
import { openModal, closeModal } from '../../utils/modalUtil';
import dayjs from 'dayjs';
import { loadColors } from '../../utils/loaders';

export default function Day({ day, rowIdx }) {
  const { setSelectedDay, selectedDay, savedAssignments, setSelectedAssignment } = useContext(GlobalContext);
  const [selectedAction, setSelectedAction] = useState(false);
  const [dayAssignments, setDayAssignments] = useState([]);
  const [colors, setColors] = useState({});

  //modal
  const handleActionClick = (action) => {
    openModal(action, day, () => setSelectedAction(action)); 
  };
  const handleCloseModal = () => {
    closeModal(() => setSelectedAction(null)); 
  };
  
  //vyhledání a filtrace úkolu k dánemu dnu
  useEffect(() => {
    const assignments = savedAssignments.filter((evt) =>
    dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
  );
  setDayAssignments(assignments);
  }, [savedAssignments, day]);

  //přiřazení background-color jaká byla vybraná v assignment.jsx
  useEffect(() => {
    async function fetchColors() {
      const colors = await loadColors();
      setColors(colors);
    }

    fetchColors();
  }, []);

  //todo
  //kliknutí na datum zobrazí den po hodinách, přiřazení úkolů podle času začátku(new component)

  //přesun z jednoho dne na druhý pomocí myši, změní se datum v assignment


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
        <div className='assignmentInDay' key={idx}
          onClick={()=> setSelectedAssignment(evt)}
          style={{backgroundColor: colors[evt.label] || 'transparent'}}>
          {evt.assignmentName}
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
