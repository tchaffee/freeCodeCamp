import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const propTypes = {
  delete: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool
};

function DeleteModal(props) {
  const { show, onHide } = props;
  return (
    <Modal
      aria-labelledby='modal-title'
      autoFocus={ true }
      backdrop={ true }
      bsSize='lg'
      keyboard={ true }
      onHide={ onHide }
      show={ show }
      >
      <Modal.Header closeButton={ true }>
        <Modal.Title id='modal-title'>Delete My Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This will really delete all your data, including all your progress
          and account information.
        </p>
        <p>
          We won't be able to recover any of it for you later,
          even if you change your mind.
        </p>
        <p>
          If there's something we could do better, send us an email instead and
          we'll do our best: &thinsp;
          <a href='mailto:team@spiraladder.com' title='team@spiraladder.com'>
            team@spiraladder.com
          </a>
        </p>
        <hr />
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='success'
          onClick={ props.onHide }
          >
          Nevermind, I don't want to delete my account
        </Button>
        <div className='button-spacer' />
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='danger'
          onClick={ props.delete }
          >
          I am 100% certain. Delete everything related to this account
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ props.onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';
DeleteModal.propTypes = propTypes;

export default DeleteModal;
