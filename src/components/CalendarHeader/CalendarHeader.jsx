import { useContext } from "react"
import Logo from '../../assets/images/calendar_icon.png';
import {BiSolidChevronLeft, BiSolidChevronRight, BiMenu} from 'react-icons/bi'
import './calendarHeader.css'
import GlobalContext from "../../context/globalContext";
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  const handlePrevMonth = () =>{
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = ()=>{
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = ()=>{
    setMonthIndex(monthIndex === dayjs().month()
     ? monthIndex + Math.random() : dayjs().month())
  };

  return (
    <header className="calendarHeader">
      <button className="sideBarBtn"><BiMenu/></button>
      <img src={Logo} alt="calendar"/>
      <h1>Calendar</h1>
      <button onClick={handleReset} className="todayBtn">Today</button>
      <div className="prevNextBrnGroup">
      <button onClick={handlePrevMonth}><BiSolidChevronLeft/></button>
      <button onClick={handleNextMonth}><BiSolidChevronRight/></button>
      </div>
      <h1>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h1>
      {/* dropdown na rozdělení den, týden, měsíc */}
    </header>
  )
}
