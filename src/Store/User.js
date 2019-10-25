import axios from 'axios';
import history from '../history'
/**
 * ACTION TYPES
 */
const ADD_USER = 'ADD_USER';
const GET_USER = 'GET_USER';

/**
 * INITIAL STATE
 */
const userObject = {};


/**
 * ACTION CREATORS
 */

const addUser = (user) => ({ type: ADD_USER, user })
const getUser = user => ({ type: GET_USER, user })


/**
 * THUNK CREATORS
 */
export const registerUserThunk = (email, password) => async dispatch => {

  try {
    let response = await axios.post("https://pgqrxh9ys4.execute-api.us-west-1.amazonaws.com/Prod/", { email, password });
    let { data } = response;

    let userObject;

    if (data.statusCode === 200) {
      userObject =
        {
          user: data.body.user,
          registered: true
        };
      dispatch(addUser(userObject));
      history.push('/')
    }
    else {
      userObject =
        {

          registered: false
        }
      dispatch(addUser(userObject));
    }
  } catch (error) {
    console.log(error);
  }

}

export const loginUserThunk = (email, password) => async dispatch => {

  try {
    let response = await axios.post("https://isloxxdzw9.execute-api.us-west-1.amazonaws.com/Prod", { email, password });
    let { data } = response;

    let userObject;

    if (data.statusCode === 200) {
      userObject =
        {
          user: data.body.user,
          registered: true
        };
      dispatch(getUser(userObject));
      history.push('/mydash')
    }
    else {
      userObject =
        {

          registered: false
        }
      dispatch(getUser(userObject));
    }
  } catch (error) {
    console.log(error);
  }

}




/**
 * REDUCER
 */
export default function (state = userObject, action) {
  switch (action.type) {
    case ADD_USER:
      return action.user
    case GET_USER:
      return action.user;
    default:
      return state
  }
}
