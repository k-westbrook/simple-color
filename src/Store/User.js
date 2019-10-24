import axios from 'axios';

/**
 * ACTION TYPES
 */
const ADD_USER = 'ADD_USER';

/**
 * INITIAL STATE
 */
const userObject = {};


/**
 * ACTION CREATORS
 */

const addUser = user => ({ type: ADD_USER, user })


/**
 * THUNK CREATORS
 */
export const registerUser = (email, password) => async dispatch => {

  try {
    let response = await axios.post("https://pgqrxh9ys4.execute-api.us-west-1.amazonaws.com/Prod/", { email, password });
  } catch (error) {
    console.log(error);
  }

}
