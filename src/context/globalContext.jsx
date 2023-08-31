import React from 'react'


const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex: (index)=>{},
    smallCalendareMonth: 0,
    setSmallcalendarMonth: (index)=>{},
    selectedDay:null,
    setSelectedDay: (day) =>{},
    isEventModalOpen: false,
    openEventModal: () => {},
    closeEventModal: () => {},
})


export default GlobalContext;

