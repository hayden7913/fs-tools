import React, { Component } from 'react';

import {
  alphAction,
  postProject,
  remoteSubmit,
} from '../actions/indexActions';

import {
  alphAction,
  postProject,
  remoteSubmit,
} from '../sagas/indexActions';

let AddProjectPage = class extends Component {
  render() {
    return (
      <div>
        <ProjectTaskForm
          handleCancel={routeToProjectsPage}
          handleSubmit={this.handleRemoteSubmit}
          label="Project Name"
          title="New Project"
        >
        <Modal rootModalClass={`roadrunner ${isModalClosing ? 'out' : ''}`} />
      </div>
    );
  }
};

export default AddProjectPage = connect(mapStateToProps, {
  alphAction,
  postProject,
  remoteSubmit,
})(AddProjectPage);
