import {useState, useEffect, useContext } from 'react'
import {BiTimeFive, BiCheck} from 'react-icons/bi'
import {MdSegment} from 'react-icons/md'
import { loadColors } from '../../utils/loaders';
import GlobalContext from '../../context/globalContext';

export default function AssignmentForm() {
  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentTimeStart, setAssignmentTimeStart] = useState('');
  const [description, setDescription] = useState('');
  const [colorElements, setColorElements] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState();
  const { dispatchCallEvent, setShowEventModal, selectedDay } = useContext(GlobalContext);

  const handleSubmit = async () => {
  
    if (selectedDay) {
      const calendarEvent = {
        assignmentName,
        description,
        label: selectedLabel,
        day: selectedDay.valueOf(),
        assignmentTimeStart,
        id: Date.now(),
      };
  
      dispatchCallEvent({ type: 'push', payload: calendarEvent });
      setShowEventModal(false);
    } else {
      console.error('selectedDay není definována nebo nemá hodnotu.');
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
    <form onSubmit={handleSubmit}>
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
          >
            Save
          </button>
        </footer>
      </div>
    </form>
  );
}