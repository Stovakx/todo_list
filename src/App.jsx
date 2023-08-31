import React, { useState, useContext, useEffect } from 'react';
import  {getMonth}  from './utils/getDate';
import CalendarHeader from './components/CalendarHeader/CalendarHeader'
import  Sidebar  from './components/sidebar/Sidebar';
import  Month  from './components/month/Month';
import GlobalContext from './context/globalContext';
import './index.css'
import EventModal from './components/eventModal/eventModal';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className='wrapper' >
        {showEventModal && <EventModal/>}
        <CalendarHeader />
        <div className='calendar_wrapper'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App
