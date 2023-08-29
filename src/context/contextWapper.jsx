import {useState} from 'react';
import GlobalContext from './globalContext';
import dayjs from 'dayjs';

export default function ContextWapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    
    return (
        <GlobalContext.Provider value={{monthIndex, setMonthIndex}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
