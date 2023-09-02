import { useEffect, useReducer, useState } from 'react';
import GlobalContext from './globalContext';
import dayjs from 'dayjs';

const savedEventsReducer = (state, [type, payload])=>{
  switch(type){
    case "create":
      return[...state, payload];
    case "update":
      return state.map(evt => evt.id === payload.id ? payload : evt);
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    
    default:
      throw new Error();

  }
}

const initEvents = ()=>{
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents
}

export default function ContextWapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEventModal, setShowEventModal] = useState(null);
  const [savedEvents, dispatchCallEvent] = useReducer(savedEventsReducer, [], initEvents);

  useEffect(()=>{
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents])

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
    dispatchCallEvent,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
}


