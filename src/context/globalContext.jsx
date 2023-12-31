import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  showEventModal:false,
  setShowEventModal:()=>{},
  dispatchCallEvent:({type, payload})=>{},
  savedAssignments: [],
  selectedAssignment: null,
  setSelectedAssignment: ()=>{},
});


export default GlobalContext;