import {useState} from 'react'
import {BiTimeFive, BiLocationPlus} from 'react-icons/bi'

export default function AssignmentForm() {
    const [assignmentName, setAssignmentName] = useState('');
    const [assignmentDateStart, setAssignmentDateStart] = useState('');
    const [assignmentTimeStart, setAssignmentTimeStart]= useState('');

    return (
        <div className='assignmentBody'>
            <div className='title'>
                <input 
                    type='text' 
                    name='assignmentName' 
                    placeholder='assignment name' 
                    value={assignmentName} 
                    onChange={(e)=> setAssignmentName(e.target.value)} 
                />
            </div>
            <div className='dateDiv'>
                <BiTimeFive/>
                <div>
                    <input type='date' 
                        name='assignmentStartDate' 
                        value={assignmentDateStart} 
                        onChange={(e)=>setAssignmentDateStart(e.target.value)}    
                    />
                    <div className='assignmentTimeDiv'>
                        <input type='time'
                            name='assignmentTimeStart'
                            value={assignmentTimeStart}
                            onChange={(e)=>setAssignmentTimeStart(e.target.value)}
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
