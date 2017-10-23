/**
*
* Events
*
*/

import React from 'react';
// import styled from 'styled-components';


class Events extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(event) {
    return () => this.props.onDelete(event);
  }

  handleEdit(event) {
    return () => this.props.onEdit(event);
  }

  render() {
    return (
      <div>
        {this.props.events.map((event) => (
          <div key={event.id}>
            {event.title}
            {event.id}
            <button onClick={this.handleEdit(event)}>e</button>
            <button onClick={this.handleDelete(event)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}

Events.propTypes = {

};

export default Events;
