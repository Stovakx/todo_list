import { useContext, useState } from 'react';
import GlobalContext from '../../context/globalContext';
import { getCurrentDayClass } from '../../utils/getDate';
import EventModal from '../eventModal/eventModal';
import './currentDay.css'

export default function Day({day, rowIdx}) {
  const { setSelectedDay, selectedDay} = useContext(GlobalContext)
  const [selectedAction, setSelectedAction] = useState(false);

  const handleActionClick = (action) => {
    setSelectedAction(action);
  };
  return (
    <div className='dayDiv'>
      <header>
        {rowIdx === 0 && (
          //změnit na button a po buttonu rozkliknou daný den
          <p className='dayName'>{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={getCurrentDayClass(day, selectedDay)}>
          {day.format('D')}
        </p>
      </header>
      {/* když otevřu modal tady, tak nejde zavřít, bugne se a nejde s ním nic dělat */}
      <div className='dayEventsDiv' onClick={()=>{
          setSelectedDay(day)
          handleActionClick('event')
        }}>

      </div>
      {selectedAction && (
        <EventModal 
          selectedAction={selectedAction} selectedDay={selectedDay} 
          closeModal={() => setSelectedAction(false)}
        />
      )}
    </div>
  )
}
