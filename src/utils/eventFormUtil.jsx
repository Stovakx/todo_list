// eventFormReducer.js
import { useReducer } from 'react';

const eventFormReducer = (state, action) => {
  switch (action.type) {
    case 'updateEventName':
      return { ...state, eventName: action.value };
    case 'updateEventDateStart':
      return { ...state, eventDateStart: action.value };
    case 'updateEventDateEnd':
      return { ...state, eventDateEnd: action.value };
    case 'updateEventTimeStart':
      return { ...state, eventTimeStart: action.value };
    case 'updateLocation':
      return { ...state, location: action.value };
    default:
      return state;
  }
};

export const useEventForm = () => {
  const [state, dispatch] = useReducer(eventFormReducer, {
    eventName: '',
    eventDateStart: '',
    eventDateEnd: '',
    eventTimeStart: '',
    location: '',
  });

  const updateField = (field, value) => {
    dispatch({ type: field, value });
  };

  return [state, updateField];
};
