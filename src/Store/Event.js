import axios from 'axios';
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
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
const getEvent = (event) => ({ type: GET_SPECIFIC_EVENT, event })
const removeEvent = (event) => ({ type: REMOVE_EVENT, event })


/**
 * THUNK CREATORS
 */
