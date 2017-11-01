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
import { cloneDeep, remove, findIndex } from 'lodash';

import Events from 'components/Events';
import EventForm from 'components/EventForm';
import LifeMapChart from 'components/LifeMapChart';
import { Flex, Box } from 'reflexbox';

import events from './fixtures/events.json';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      events,
      event: this.getNewEvent(),
    };
    window.state = this;

    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
    this.handleEditRequest = this.handleEditRequest.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getNewEvent() {
    return {
      age: '',
      description: '',
      title: '',
      level: 0,
      type: '',
      id: null,
    };
  }

  handleAddEvent(newEvent) {
    const newState = cloneDeep(this.state);

    newState.events[newEvent.type].push(newEvent);
    newState.event = this.getNewEvent();

    this.setState(newState);
  }

  handleSaveEvent(event) {
    const newState = cloneDeep(this.state);
    const eventIdx = findIndex(this.state.events[event.type], { id: event.id });

    newState.events[event.type][eventIdx] = event;
    newState.event = this.getNewEvent();

    this.setState(newState);
  }

  handleDelete(event) {
    const newState = cloneDeep(this.state);
    remove(newState.events, event);
    this.setState(newState);
  }

  handleEditRequest(event) {
    this.setState({ event });
  }

  render() {
    return (
      <main>
        <Flex p="15px">
          <Box w={1 / 3}>
            <EventForm
              event={this.state.event}
              onAdd={this.handleAddEvent}
              onSave={this.handleSaveEvent}
            />
          </Box>
          <Box w={2 / 3}>
            <LifeMapChart events={this.state.events} />
          </Box>
        </Flex>

        <Events
          events={this.state.events}
          onEdit={this.handleEditRequest}
          onDelete={this.handleDelete}
        />
      </main>
    );
  }
}
