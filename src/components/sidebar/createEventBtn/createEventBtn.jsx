import { useState, useContext } from 'react';
import { BsPlus } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import EventModal from '../../eventModal/eventModal';
import GlobalContext from '../../../context/globalContext';
import './createEventBtn.css';

export default function CreateEventBtn() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const { selectedDay, setShowEventModal } = useContext(GlobalContext); 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleActionClick = (action) => {
    setSelectedAction(action); // Set the selected action
    setShowEventModal(true); // Open the modal
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
          <button title='event create' onClick={() => handleActionClick('event')}>event</button>
          <button title='assignment create' onClick={() => handleActionClick('assignment')}>assignment</button>
        </div>
      )}
      {/* Passing selectedAction and selectedDay to EventModal */}
      {selectedAction && (
        <EventModal selectedAction={selectedAction} selectedDay={selectedDay} />
      )}
    </div>
  );
}
