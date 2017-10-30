/**
*
* Events
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import {
  EventList,
  EventListLabel,
  Event,
  EventTitle,
  EventDescription,
  EventActions,
  EventAction,
  EventAge,
  EventLevel,
  EventLevelNumber,
} from './styles';


class Events extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getEvent = this.getEvent.bind(this);
  }

  handleDelete(event) {
    return () => this.props.onDelete(event);
  }

  handleEdit(event) {
    return () => this.props.onEdit(event);
  }

  getEvent(event) {
    return (
      <Event key={event.id}>
        <EventTitle>
          {event.title}
        </EventTitle>
        <EventDescription>
          {event.description}
        </EventDescription>
        <Flex my="15px">
          <Box w={1 / 2} justify="center" align="middle" flex>
            <EventAge>
              Age {event.age}
            </EventAge>
          </Box>
          <Box w={1 / 2} justify="center" align="middle" flex>
            <EventLevel>
              Level
              <EventLevelNumber level={event.level}>
                {event.level}
              </EventLevelNumber>
            </EventLevel>
          </Box>
        </Flex>
        <EventActions>
          <EventAction
            onClick={this.handleEdit(event)}
          >
            EDIT
          </EventAction>
          <EventAction
            onClick={this.handleDelete(event)}
          >
            DELETE
          </EventAction>
        </EventActions>
      </Event>
    );
  }

  render() {
    const categories = Object.keys(this.props.events);
    return (
      <Flex wrap>
        {categories.map((category) => (
          <Box p="10px" w={[1, 1/3]} key={category}>
            <EventListLabel>
              {category}
            </EventListLabel>
            <EventList category={category}>
              {this.props.events[category].map(this.getEvent)}
            </EventList>
          </Box>
        ))}
      </Flex>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {this.props.events.map((event) => (
  //         <div key={event.id}>
  //           {event.title}
  //           {event.id}
  //           <button onClick={this.handleEdit(event)}>e</button>
  //           <button onClick={this.handleDelete(event)}>x</button>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
}

Events.propTypes = {

};

export default Events;
