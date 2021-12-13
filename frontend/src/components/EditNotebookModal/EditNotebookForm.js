import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { editANotebook } from '../../store/notebooks'

function EditNotebookForm({ notebookId }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [title, setTitle] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editANotebook({notebookId, title}))
    history.push(`/notebooks`)
    // setErrors([]);
    // return dispatch(sessionActions.login({ credential, password }))
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul> */}
      <label>
        New Title
        <input
          placeholder='New title'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update Notebook</button>
    </form>
  );
}

export default EditNotebookForm
