import dayjs from 'dayjs'
import React, {useContext, useEffect, useState } from 'react'
import {BiSolidChevronLeft, BiSolidChevronRight} from 'react-icons/bi'
import GlobalContext from '../../../context/globalContext';
import {getMonth} from '../../../utils/getDate';
import './calendar.css';
export default function Calendar() {
    const [currentMonthIdx, setCurrentMonthIdx]= useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    useEffect(()=>{
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx]);

    const { monthIndex, setSmallcalendarMonth, setSelectedDay, selectedDay }= useContext(GlobalContext);
    useEffect(()=>{
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex]);

    function handlePrevMonth(){
        setCurrentMonthIdx(currentMonthIdx - 1);
    }
    function handleNextMonth(){
        setCurrentMonthIdx(currentMonthIdx + 1);
    }
    const getCurrentDayClass= (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currentDay = day.format(format);
        const slcDay = selectedDay && selectedDay.format(format)
        if(nowDay === currentDay){
            return 'miniCurrentDay';
        }else if(currentDay === slcDay){
            return 'selectedDay'
        }else{
            return "";
        }
        
    }
    return (
    <div className='calendarDiv'>
        <header>
            <p>{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}</p>
            <div>
                <button onClick={handlePrevMonth}><BiSolidChevronLeft/></button>
                <button onClick={handleNextMonth}><BiSolidChevronRight/></button>
            </div>
        </header>
        <div className='miniCalendar'>
            {currentMonth[0].map((day,i)=> (
                <span key={i}>
                    {day.format('dd').charAt(0)}
                </span>
            ))}
            {currentMonth.map((row, i) =>(
                <React.Fragment key={i}>
                    {row.map((day, idx) =>(
                        <button 
                            key={idx} 
                            onClick={()=>{
                                setSmallcalendarMonth(currentMonthIdx);
                                setSelectedDay(day);
                            }}
                            className={getCurrentDayClass(day)}>
                            <span >{day.format('D')}</span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
    )
}
