import {useState, useEffect, useContext } from 'react'
import {BiTimeFive, BiLocationPlus, BiCheck} from 'react-icons/bi'
import {MdSegment} from 'react-icons/md'
import { loadColors } from '../../utils/loaders';
import GlobalContext from '../../context/globalContext';

export default function AssignmentForm() {
  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentTimeStart, setAssignmentTimeStart] = useState('');
  const [description, setDescription] = useState('');
  const [colorElements, setColorElements] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState();
  const { dispatchCallEvent, setShowEventModal, selectedDate } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (selectedDate) {
      const calendarEvent = {
        assignmentName,
        description,
        label: selectedLabel,
        day: selectedDate.valueOf(),
        assignmentTimeStart,
        colorElements,
        id: Date.now(),
      };
  
      dispatchCallEvent({ type: 'push', payload: calendarEvent });
      setShowEventModal(false);
    } else {
      console.error('selectedDate není definována nebo nemá hodnotu.');
    }
  };  

  useEffect(() => {
    async function fetchColors() {
      const colors = await loadColors();
      const colorKeys = Object.keys(colors);

      // Vytvořit pole span elementů pro každou barvu
      const colorSpans = colorKeys.map((colorName, i) => (
        <span
          key={i}
          onClick={()=> setSelectedLabel(colorName)}
          style={{ backgroundColor: colors[colorName] }}
          className="colorSpan"
        >
          {selectedLabel === colorName &&(
            <BiCheck/>
          )}
        </span>
      ));

      setColorElements(colorSpans);
    }

    fetchColors();
  }, [selectedLabel]);

  return (
    <form>
      <div className="assignmentBody">
        <div className="title">
          <input
            type="text"
            name="assignmentName"
            placeholder="assignment name"
            value={assignmentName}
            required
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
        <div className="dateDiv">
          <BiTimeFive />
          <div className="assignmentTimeDiv">
            <input
              type="time"
              name="assignmentTimeStart"
              value={assignmentTimeStart}
              required
              onChange={(e) => setAssignmentTimeStart(e.target.value)}
            />
          </div>

        </div>
        <div className="description">
          <MdSegment />
          <textarea
            type="text"
            name="description"
            placeholder="Add a description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="colors">
          {colorElements}
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