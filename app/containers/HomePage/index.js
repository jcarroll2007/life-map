/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { cloneDeep, remove } from 'lodash';

import Events from 'components/Events';
import EventForm from 'components/EventForm';

import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      events: [],
    };

    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleEditRequest = this.handleEditRequest.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddEvent(newEvent) {
    const newState = cloneDeep(this.state);
    newState.events.push(newEvent);
    this.setState(newState);
  }

  handleDelete(event) {
    const newState = cloneDeep(this.state);
    remove(newState.events, event);
    this.setState(newState);
  }

  handleEditRequest(event) {
  }

  render() {
    return (
      <main>
        <EventForm onAdd={this.handleAddEvent} />

        <Events
          events={this.state.events}
          onEdit={this.handleEditRequest}
          onDelete={this.handleDelete}
        />
      </main>
    );
  }
}
