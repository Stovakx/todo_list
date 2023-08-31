import {useEffect, useState} from 'react';
import GlobalContext from './globalContext';
import dayjs from 'dayjs';

export default function ContextWapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendareMonth, setSmallcalendarMonth] = useState(null)
    const [selectedDay, setSelectedDay] = useState(null)
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    useEffect(() =>{
        if(smallCalendareMonth !== null){
            setMonthIndex(smallCalendareMonth)
        }
    }, [smallCalendareMonth])

    const openEventModal = () => {
        setIsEventModalOpen(true);
      };
    
      const closeEventModal = () => {
        setIsEventModalOpen(false);
      };
    return (
        <GlobalContext.Provider 
            value={{
                monthIndex, 
                setMonthIndex, 
                smallCalendareMonth, 
                setSmallcalendarMonth,
                selectedDay,
                setSelectedDay,
                openEventModal,
                closeEventModal,
                isEventModalOpen,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
