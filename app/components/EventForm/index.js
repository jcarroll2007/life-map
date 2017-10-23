/**
*
* EventForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { uniqueId, cloneDeep } from 'lodash';


class EventForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    return (event) => {
      const newState = cloneDeep(this.state);
      newState[val] = event.target.value;
      this.setState(newState);
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd({ ...this.state, id: uniqueId() });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Title"
          onChange={this.handleChange('title')}
          value={this.state.value}
        />
        <textarea
          placeholder="description"
          onChange={this.handleChange('description')}
        />
        <input
          placeholder="age"
          onChange={this.handleChange('age')}
        />
        <input
          placeholder="level"
          onChange={this.handleChange('level')}
        />
        <select onChange={this.handleChange('type')}>
          <option>Spiritual</option>
          <option>Emotional</option>
          <option>Physical</option>
        </select>
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

EventForm.propTypes = {
  onAdd: PropTypes.func,
};

export default EventForm;
