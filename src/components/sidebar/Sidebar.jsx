import React from 'react';
import CreateEventBtn from './createEventBtn/createEventBtn';
import Calendar from './calendar/calendar';
import './sidebar.css';
export default function Sidebar() {
  return (
    <aside>
      <CreateEventBtn/>
      <div>
        <Calendar/>
      </div>
    </aside>
  )
}
