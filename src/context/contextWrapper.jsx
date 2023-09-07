import { useEffect, useReducer, useState } from 'react';
import GlobalContext from './globalContext';
import dayjs from 'dayjs';

const savedAssignmentsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    case "push":
      return [...state, payload];
    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem('savedAssignments');
  
  if (storageEvents) {
    try {
      const parsedEvents = JSON.parse(storageEvents);
      return parsedEvents;
    } catch (error) {
      console.error('Error parsing savedAssignments from localStorage:', error);
    }
  }
  
  // If data is missing or invalid, return an empty array
  return [];
}

export default function ContextWapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEventModal, setShowEventModal] = useState(null);
  const [selectedAssignment, setSelectedAssignment]= useState(null)
  const [savedAssignments, dispatchCallEvent] = useReducer(savedAssignmentsReducer, initEvents());

  useEffect(() => {
    localStorage.setItem('savedAssignments', JSON.stringify(savedAssignments));
  }, [savedAssignments])


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
    savedAssignments,
    selectedAssignment,
    setSelectedAssignment
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
}