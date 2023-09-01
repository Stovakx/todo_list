import { useEffect, useState } from 'react';
import GlobalContext from './globalContext';
import dayjs from 'dayjs';

export default function ContextWapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEventModal, setShowEventModal] = useState(null);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  const contextValue = {
    monthIndex,
    setMonthIndex,
    smallCalendarMonth,
    setSmallCalendarMonth,
    selectedDay,
    setSelectedDay,
    showEventModal,
    setShowEventModal,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
}