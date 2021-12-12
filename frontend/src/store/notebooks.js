import { csrfFetch } from './csrf';
import notesReducer from './notes'

const SET_NOTEBOOKS = 'notebooks/SET_NOTEBOOKS'
const CREATE_NOTEBOOK = 'notebooks/CREATE_NOTEBOOK'
const UPDATE_NOTEBOOK = 'notebooks/UPDATE_NOTEBOOK'
const DELETE_NOTEBOOK = 'notebooks/DELETE_NOTEBOOK'

//action creators
const setNotebooks = (notebooks) => {
  return {
    type: SET_NOTEBOOKS,
    payload: notebooks
  }
}

const createNotebook = (newNotebook) => {
  return {
    type: CREATE_NOTEBOOK,
    payload: newNotebook
  }
}

const updateNotebook = (notebook) => {
  return {
    type: UPDATE_NOTEBOOK,
    payload: notebook
  }
}

const deleteNotebook = (notebookId) => {
  return {
    type: DELETE_NOTEBOOK,
    payload: notebookId
  }
}

// make a thunk to fetch the backend route for notebooks
// API is expecting to be handed one user object
// useSelector to grab the user from state
export const getNotebooks = (user) => async (dispatch) => {
      const response = await csrfFetch(`/api/notebooks/user/${user.id}`);
      const data = await response.json();
      dispatch(setNotebooks(data))
      return response;
};

export const createANotebook = (title) => async(dispatch) => {
  const res = await csrfFetch('/api/notebooks/', {
    method: 'POST',
    body: JSON.stringify({ title })
  })
  const data = await res.json()
  dispatch(createNotebook(data))  //data is the NEW Notebook Object
}

export const editANotebook = (updatedNotebook) => async(dispatch) => {
  const { notebookId, title } = updatedNotebook
  const res = await csrfFetch(`/api/notebooks/${notebookId}`, {
    method: 'PATCH',
    body: JSON.stringify({ title })
  })
  const data = await res.json()
  dispatch(updateNotebook(data))
}

export const deleteANotebook = (notebookId) => async(dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${notebookId}`, { method: 'DELETE' })
  const data = await res.json()

  dispatch(deleteNotebook(data.notebookId))
}

//reducer
const initialState = { notebooks: null };
const notebooksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_NOTEBOOKS:
      newState = Object.assign({}, state);
      newState.notebooks = action.payload;
      return newState;

    case CREATE_NOTEBOOK:
      newState = Object.assign({}, state);
      newState.notebooks = [...state.notebooks]
      newState.notebooks.push(action.payload)
      return newState;

    case UPDATE_NOTEBOOK:
      newState = Object.assign({}, state)
      const searchId = action.payload.id
      newState.notebooks = [...state.notebooks];
      const foundIndex = newState.notebooks.findIndex(notebookObj => notebookObj.id === searchId)
      newState.notebooks[foundIndex] = action.payload
      return newState
      
    case DELETE_NOTEBOOK:
      newState = Object.assign({}, state)
      const deleteId = action.payload
      newState.notebooks = [...state.notebooks];
      const deleteIndex = newState.notebooks.findIndex(notebookObj => notebookObj.id === deleteId)
      newState.notebooks.splice(deleteIndex, 1)
      return newState;

    default:
      return state;
  }
};

export default notebooksReducer;
