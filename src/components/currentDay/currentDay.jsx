import React from 'react'
import dayjs from 'dayjs'

import './day.css'

export default function Day({day, rowIdx}) {
  const getCurrentDayClass = ()=>{
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'currentDay' : "";
  }

  return (
    <div className='dayDiv'>
      <header>
        {rowIdx === 0 && (
          <p className='dayName'>{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={getCurrentDayClass()}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}
