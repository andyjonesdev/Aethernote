import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';

function AlreadyCrewmateModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='splash-button' onClick={() => setShowModal(true)}>Already a crewmate? Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default AlreadyCrewmateModal
