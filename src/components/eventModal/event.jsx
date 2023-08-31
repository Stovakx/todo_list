import { useState } from 'react'
import {BiTimeFive, BiLocationPlus} from 'react-icons/bi'

export default function EventForm() {
    const [eventName, setEventName] = useState('');
    const [eventDateStart, setEventDateStart] = useState('');
    const [eventDateEnd, setEventDateEnd]= useState('');
    const [eventTimeStart, setEventTimeStart]= useState('');
    const [eventTimeEnd, setEventTimeEnd]= useState('');

    return (
        <div className='eventBody'>
            <div className='title'>
                <input 
                    type='text' 
                    name='eventName' 
                    placeholder='Event name' 
                    value={eventName} 
                    onChange={(e)=> setEventName(e.target.value)} 
                />
            </div>
            <div className='dateDiv'>
                <BiTimeFive/>
                <div>
                    <input type='date' 
                        name='eventStartDate' 
                        value={eventDateStart} 
                        onChange={(e)=>setEventDateStart(e.target.value)}    
                    />
                    <input type='date' 
                        name='eventEndDate' 
                        value={eventDateEnd}
                        onChange={(e)=>setEventDateEnd(e.target.value)}
                    />
                    <div>
                        <input type='time'
                            name='eventTimeStart'
                            value={eventTimeStart}
                            onChange={(e)=>setEventTimeStart(e.target.value)}
                        />
                        <input type='time'
                            name='eventTimeEnd'
                            value={eventTimeEnd}
                            onChange={(e)=>setEventTimeEnd(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='location'>
                <BiLocationPlus/>
                <input type='text'/>
            </div>

        </div>
    )
}
