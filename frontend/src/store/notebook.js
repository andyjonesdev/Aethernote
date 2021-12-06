import { csrfFetch } from './csrf';
import { useSelector } from 'react-redux'

// make a thunk to fetch the backend route for notebooks
// API is expecting to be handed one user object
// useSelector to grab the user from state
export const getNotebooks = () => async (dispatch) => {
      const user = useSelector((state) => state.session.user)

      const response = await csrfFetch('/api/notebooks', {
        method: 'GET',
        body: JSON.stringify({
          id: user.id
        }),
      });
      const data = await response.json();
      return response;
};

