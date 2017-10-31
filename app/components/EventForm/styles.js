import styled from 'styled-components';


const EventFormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.55);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;

  input:not([type='submit']),
  select,
  textarea {
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid #d7d7d7;
    outline: none;

    &:focus {
      border-bottom-color: ${(props) => props.theme.spiritual};
    }
  }

  input[type='submit'] {
    background-color: ${(props) => props.theme.spiritual};
    border-radius: 4px;
    color: white;
    padding: 7px 20px;
    max-width: 200px;
    cursor: pointer;
  }
`;

export {
  EventFormWrapper,
  Form,
};
