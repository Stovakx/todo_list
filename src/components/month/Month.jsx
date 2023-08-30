import React from 'react';
import Day from '../currentDay/currentDay';

import './month.css';

export default function Month({month}) {
  return (
    <div className='monthDiv'>
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, idx)=> (
                    <Day day={day} key={idx} rowIdx={i}/>
                ))} 
            </React.Fragment>
        ))}
    </div>
  )
}
