import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'

/* Create first action component called setSearchField, which will receive user input
in the form of text in the search box, and the action should return an object which is assigned
a type name and it should be in text format.
*/

export const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text
})

//  Higher-Order Function: the requestRobots function is returning the dispatch function
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}