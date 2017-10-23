/**
*
* EventForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { uniqueId } from 'lodash';


class EventForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd({
      id: uniqueId(),
      title: 'this is my title',
    });
    console.log('test');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Title" />
        <textarea placeholder="description" />
        <input placeholder="age" />
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

EventForm.propTypes = {
  onAdd: PropTypes.func,
};

export default EventForm;
