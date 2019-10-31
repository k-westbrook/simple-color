import axios from 'axios';
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
const ADD_EVENT = 'ADD_EVENT';
const GET_SPECIFIC_EVENT = 'GET_SPECIFIC_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';

/**
 * INITIAL STATE
 */
const eventObject = {
  events: [],
  selectedEvent: null
};


/**
 * ACTION CREATORS
 */

const getEvents = (events) => ({ type: GET_ALL_EVENTS, events })
const addEvent = (event) => ({ type: ADD_EVENT, event })
const getEvent = (event) => ({ type: GET_SPECIFIC_EVENT, event })
const removeEvent = (event) => ({ type: REMOVE_EVENT, event })


/**
 * THUNK CREATORS
 */
export const addEventThunk = (name, adminEmail, adminId, date, time, address, state, city, comments) => async dispatch => {

  try {

    let response = await axios.post("https://7lcnoku2w9.execute-api.us-west-1.amazonaws.com/Prod", { name, adminEmail, adminId, date, time, address, state, city, comments });
    let { data } = response;

    let selectedEvent;
    console.log(data.body)
    if (data.statusCode === 200) {

      selectedEvent = data.body.event;
      console.log(selectedEvent)
      dispatch(addEvent(selectedEvent));

    }
    else {
      selectedEvent = null;
      dispatch(addEvent(selectedEvent));
    }
  } catch (error) {
    console.log(error);
  }

}

/**
* REDUCER
*/
export default function (state = eventObject, action) {
  switch (action.type) {
    case ADD_EVENT:
      console.log(action.event)
      return { ...state, selectedEvent: action.event }
    default:
      return state
  }
}
