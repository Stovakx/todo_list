import {useState, useEffect} from 'react'
import {BiTimeFive, BiLocationPlus, BiCheck} from 'react-icons/bi'
import {MdSegment} from 'react-icons/md'
import { loadColors } from '../../utils/loaders';

export default function AssignmentForm() {
    const [assignmentName, setAssignmentName] = useState('');
    const [assignmentDateStart, setAssignmentDateStart] = useState('');
    const [assignmentTimeStart, setAssignmentTimeStart] = useState('');
    const [description, setDescription] = useState('');
    const [colorElements, setColorElements] = useState([]);
  
    useEffect(() => {
      async function fetchColors() {
        const colors = await loadColors();
        const colorKeys = Object.keys(colors);
  
        // Vytvořit pole span elementů pro každou barvu
        const colorSpans = colorKeys.map((colorName) => (
          <span
            key={colorName}
            style={{ backgroundColor: colors[colorName] }}
            className="colorSpan"
          ><BiCheck/></span>
        ));
  
        setColorElements(colorSpans);
      }
  
      fetchColors();
    }, []);
  
    return (
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
          <div>
            <input
              type="date"
              name="assignmentStartDate"
              value={assignmentDateStart}
              required
              onChange={(e) => setAssignmentDateStart(e.target.value)}
            />
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
        </div>
        <div className="location">
          <BiLocationPlus />
          <input type="text" />
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
      </div>
    );
  }