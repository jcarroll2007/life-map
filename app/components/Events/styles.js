import styled from 'styled-components';


const EventList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px;
  background-color: ${(props) => props.theme[props.category]};
  border-radius: 3px;
`;

const EventListLabel = styled.h3`
  list-style: none;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 3px;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 300;
`;

const Event = styled.li`
  background-color: white;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 3px;
`;

const EventTitle = styled.label`
  font-size: 20px;
  font-weight: 300;
`;
const EventDescription = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 0;
`;
const EventLevel = styled.div`
`;
const EventLevelNumber = styled.span`
  display: inline-block;
  margin-left: 5px;
  border-radius: 3px;
  // background-color: ${(props) => props.theme.levels[props.level]};
  padding: 10px;
  min-width: 50px;
  text-align: center;
`;
const EventAge = styled.div`
`;
const EventActions = styled.div`
  margin-top: 10px;
  text-align: center;
`;
const EventAction = styled.button`
  margin: 0 10px;
  background-color: #ececec;
  color: #585858;
  padding: 5px 15px;
  border-radius: 3px;
  cursor: pointer;
`;


export {
  EventList,
  EventListLabel,
  Event,
  EventTitle,
  EventDescription,
  EventLevel,
  EventLevelNumber,
  EventAge,
  EventActions,
  EventAction,
};
