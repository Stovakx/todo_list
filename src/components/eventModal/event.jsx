import React, { useContext } from 'react'
import {BiTimeFive, BiLocationPlus} from 'react-icons/bi'
import { useEventForm } from '../../utils/eventFormUtil';
import GlobalContext from '../../context/globalContext';


export default function EventForm() {
    const [formData, updateField]= useEventForm();
    const selectedDay = useContext(GlobalContext)

    const handleSubmit = () =>{

        const { eventName, eventDateStart, eventDateEnd, eventTimeStart, location } = formData;
        // uložení dat do local storage
        const eventData = {
            eventName,
            eventDateStart,
            eventDateEnd,
            eventTimeStart,
            location,
          };
        const existingData = localStorage.getItem('eventData');
        const parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData.push(eventData);
        localStorage.setItem('eventData', JSON.stringify(parsedData));
    }
   
   return (
    <form>
      <div className='eventBody'>
        <div className='title'>
          <input 
            type='text' 
            name='eventName' 
            placeholder='Event name' 
            value={formData.eventName} 
            required
            onChange={(e) => updateField('updateEventName', e.target.value)} 
          />
        </div>
        <div className='dateDiv'>
                <BiTimeFive/>
            <div>
                <input
                    type='date'
                    name='eventStartDate'
                    value={formData.eventDateStart}
                    placeholder='start of event'
                    required
                    onChange={(e) => updateField('updateEventDateStart', e.target.value)}
                />
                <input type='date' 
                name='eventEndDate' 
                value={formData.eventDateEnd}
                required
                onChange={(e) => updateField('updateEventDateEnd', e.target.value)}
                />
                <div>
                <input type='time'
                    name='eventTimeStart'
                    value={formData.eventTimeStart}
                    required
                    onChange={(e) => updateField('updateEventTimeStart', e.target.value)}
                />
                </div>
          </div>
        </div>
        <div className='location'>
          <BiLocationPlus/>
          <input type='text'
            onChange={(e) => updateField('updateLocation', e.target.value)}
            name='location'
            value={formData.location}
            required
          />
        </div>
        <footer>
          <button 
            type='submit'
            onClick={handleSubmit}
          >
            Save
          </button>
        </footer>
      </div>
    </form>
  );
}
