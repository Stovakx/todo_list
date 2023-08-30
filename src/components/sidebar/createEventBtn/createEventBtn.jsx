import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import './createEventBtn.css';

export default function CreateEventBtn() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='sidebarBtn'>
      <button className='createEventBtn' onClick={toggleDropdown}>
        <BsPlus />
        <span>Create</span>
        <AiFillCaretDown />
      </button>
      {isDropdownOpen && (
        <div className='dropdownContent'>
          <button>event</button>
          <button>assignment</button>
          {/* todo meeting with everything */}
        </div>
      )}
    </div>
  );
}
