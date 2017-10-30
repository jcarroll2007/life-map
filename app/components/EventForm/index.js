/**
*
* EventForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { uniqueId, cloneDeep } from 'lodash';

import {
  EventFormWrapper,
  Form,
} from './styles';


class EventForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      event: cloneDeep(this.props.event),
    };

    window.eventForm = this;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      event: nextProps.event,
    });
  }

  handleChange(val) {
    return (event) => {
      const newState = cloneDeep(this.state);
      newState.event[val] = event.target.value;
      this.setState(newState);
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.event.id) {
      this.props.onAdd({ ...this.state.event, id: uniqueId() });
    } else {
      this.props.onSave({ ...this.state.event });
    }
  }

  render() {
    return (
      <EventFormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <input
            placeholder="Title"
            onChange={this.handleChange('title')}
            value={this.state.event.title}
          />
          <textarea
            placeholder="description"
            onChange={this.handleChange('description')}
            value={this.state.event.description}
          />
          <input
            placeholder="age"
            onChange={this.handleChange('age')}
            value={this.state.event.age}
            type="number"
          />
          <input
            placeholder="level"
            onChange={this.handleChange('level')}
            value={this.state.event.level}
            type="number"
          />
          <select
            value={this.state.event.type}
            onChange={this.handleChange('type')}
          >
            <option>Spiritual</option>
            <option>Emotional</option>
            <option>Physical</option>
          </select>
          <input type="submit" value={this.state.event.id ? 'SAVE' : 'ADD'} />
        </Form>

      </EventFormWrapper>
    );
  }
}

EventForm.propTypes = {
  onAdd: PropTypes.func,
};

export default EventForm;
