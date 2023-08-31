import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import EventModal from '../../eventModal/eventModal';
import './createEventBtn.css';

export default function CreateEventBtn() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleActionClick = (action) => {
    setSelectedAction(action);
    toggleDropdown();
  };
  return (
    <div className='sidebarBtn'>
      <button title='dropdown' className='createEventBtn' onClick={toggleDropdown}>
        <BsPlus />
        <span>Create</span>
        <AiFillCaretDown />
      </button>
      {isDropdownOpen && (
        <div className='dropdownContent'>
          <button title='event create' onClick={()=> handleActionClick('event')} >event</button>
          <button title='assignment create' onClick={()=> handleActionClick('assignment')} >assignment</button>
          {/* todo meeting with everything */}
        </div>
      )}
      {selectedAction && (
        <EventModal selectedAction={selectedAction} closeModal={() => setSelectedAction(null)} />
      )}
    </div>
  );
}
