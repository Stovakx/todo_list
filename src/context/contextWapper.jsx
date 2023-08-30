import {useEffect, useState} from 'react';
import GlobalContext from './globalContext';
import dayjs from 'dayjs';

export default function ContextWapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendareMonth, setSmallcalendarMonth] = useState(null)
    const [selectedDay, setSelectedDay] = useState(null)
    useEffect(() =>{
        if(smallCalendareMonth !== null){
            setMonthIndex(smallCalendareMonth)
        }
    }, [smallCalendareMonth])
    return (
        <GlobalContext.Provider 
            value={{
                monthIndex, 
                setMonthIndex, 
                smallCalendareMonth, 
                setSmallcalendarMonth,
                selectedDay,
                setSelectedDay,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
