import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import { ButtonSpacer } from '../../../../helperComponents';
import {
  FrontEndForm,
  BackEndForm
} from './Forms.jsx';

import { submittingSelector } from './redux';

import {
  openChallengeModal,

  openHelpModal,
  chatRoomSelector,
  guideURLSelector
} from '../../redux';

import {
  signInLoadingSelector,
  challengeSelector
} from '../../../../redux';
import {
  simpleProject,
  frontEndProject
} from '../../../../utils/challengeTypes';

const propTypes = {
  guideUrl: PropTypes.string,
  helpChatRoom: PropTypes.string.isRequired,
  isFrontEnd: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  isSimple: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  openChallengeModal: PropTypes.func.isRequired,
  openHelpModal: PropTypes.func.isRequired
};
const mapDispatchToProps = {
  openChallengeModal,
  openHelpModal
};
const mapStateToProps = createSelector(
  challengeSelector,
  signInLoadingSelector,
  submittingSelector,
  chatRoomSelector,
  guideURLSelector,
  (
    { challengeType = simpleProject },
    showLoading,
    isSubmitting,
    helpChatRoom,
    guideUrl
  ) => ({
    guideUrl,
    helpChatRoom,
    isSignedIn: !showLoading,
    isSubmitting,
    isSimple: challengeType === simpleProject,
    isFrontEnd: challengeType === frontEndProject
  })
);

export class ToolPanel extends PureComponent {
  renderSubmitButton(isSignedIn, openChallengeModal) {
    const buttonCopy = isSignedIn ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ openChallengeModal }
        >
        { buttonCopy } (ctrl + enter)
      </Button>
    );
  }

  render() {
    const {
      guideUrl,
      helpChatRoom,
      isFrontEnd,
      isSimple,
      isSignedIn,
      isSubmitting,
      openHelpModal,
      openChallengeModal
    } = this.props;

    const FormElement = isFrontEnd ? FrontEndForm : BackEndForm;
    return (
      <div>
        {
          isSimple ?
            this.renderSubmitButton(isSignedIn, openChallengeModal) :
            <FormElement isSubmitting={ isSubmitting }/>
        }
        <ButtonSpacer />
      </div>
    );
  }
}

ToolPanel.displayName = 'ProjectToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolPanel);
