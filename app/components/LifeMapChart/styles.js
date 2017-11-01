import styled from 'styled-components';

export default styled.div`
  min-height: 300px;

  .event-circle {
    fill: black;
  }

  .category-line {
    &.Spiritual {
      stroke: ${(props) => props.theme.Spiritual}
    }
    &.Physical {
      stroke: ${(props) => props.theme.Physical}
    }
    &.Emotional {
      stroke: ${(props) => props.theme.Emotional}
    }
  }
`;
