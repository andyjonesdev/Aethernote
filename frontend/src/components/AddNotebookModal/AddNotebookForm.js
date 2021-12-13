import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { createANotebook } from '../../store/notebooks'
import '../../components/NotebooksList/NotebookList.css'

function AddNotebookForm() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [title, setTitle] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createANotebook(title))
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
        Title
        <input
          placeholder='Title for your notebook'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Notebook</button>
    </form>
  );
}

export default AddNotebookForm
