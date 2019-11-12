import axios from 'axios';


/**
 * ACTION TYPES
 */
//const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
const ADD_EVENT = 'ADD_EVENT';
const GET_SPECIFIC_EVENT = 'GET_SPECIFIC_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';
const ADD_GUEST = 'ADD_GUEST';

/**
 * INITIAL STATE
 */
const eventObject = {
  selectedEvent: null
};


/**
 * ACTION CREATORS
 */

//const getEvents = (events) => ({ type: GET_ALL_EVENTS, events })
const addEvent = (event) => ({ type: ADD_EVENT, event })
const getEvent = (event) => ({ type: GET_SPECIFIC_EVENT, event })
const removeEvent = (event) => ({ type: REMOVE_EVENT, event })
const addGuestToEvent = (attendees) => ({ type: ADD_GUEST, attendees })


/**
 * THUNK CREATORS
 */
export const addEventThunk = (name, adminEmail, adminId, date, time, address, state, city, comments) => async dispatch => {

  try {

    let response = await axios.post("https://7lcnoku2w9.execute-api.us-west-1.amazonaws.com/Prod", { name, adminEmail, adminId, date, time, address, state, city, comments });
    let { data } = response;

    let selectedEvent;

    if (data.statusCode === 200) {

      selectedEvent = data.body.event;
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


export const getSpecificEventThunk = (event_id) => async dispatch => {

  try {

    let response = await axios.post("https://seafh3kn88.execute-api.us-west-1.amazonaws.com/Prod", { event_id });
    let { data } = response;

    let selectedEvent;

    if (data.statusCode === 200) {

      selectedEvent = data.body.event;
      dispatch(getEvent(selectedEvent));

    }
    else {
      selectedEvent = null;
      dispatch(getEvent(selectedEvent));
    }
  } catch (error) {
    console.log(error);
  }

}

export const addGuestThunk = (event_id, attendees) => async dispatch => {

  try {

    let response = await axios.post("https://2tkucwb48h.execute-api.us-west-1.amazonaws.com/Prod", { event_id, attendees });
    let { data } = response;

    let attendeeList;

    if (data.statusCode === 200) {

      attendeeList = data.body.attendees;
      dispatch(addGuestToEvent(attendees));

    }
    else {
      attendeeList = [];
      dispatch(addGuestToEvent(attendees));
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
      return { ...state, selectedEvent: action.event }
    case GET_SPECIFIC_EVENT:
      return { ...state, selectedEvent: action.event }
    case ADD_GUEST:
      return state;
    default:
      return state
  }
}
