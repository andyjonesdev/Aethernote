import React, { useState, useEffect } from "react";

import '../NotebooksList/NotebookList.css'
import AddNotebookForm from './AddNotebookForm'
import { Modal } from '../../context/Modal';

function AddNotebookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='add-notebook-button' onClick={() => setShowModal(true)}>Add Notebook</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='modal-upper-left'>Create a Notebook</div>
          <AddNotebookForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddNotebookModal
