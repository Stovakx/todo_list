import { useState, useContext } from 'react';
import { BsPlus } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import GlobalContext from '../../../context/globalContext';
import EventModal from '../../eventModal/eventModal';
import './createEventBtn.css';

export default function CreateEventBtn() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { selectedDay, showEventModal, setShowEventModal } = useContext(GlobalContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleActionClick = (selectedAction) => {
    setShowEventModal({
      action: selectedAction,
      selectedDay: selectedDay,
    });
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
          <button title='assignment create' onClick={() => handleActionClick('assignment')}>assignment</button>
        </div>
      )}
      {showEventModal && (
        <EventModal selectedAction={showEventModal.action} selectedDay={showEventModal.selectedDay} closeModal={() => setShowEventModal(null)} />
      )}
    </div>
  );
}
