import styled from 'styled-components';
import Form from 'react-jsonschema-form';

export default styled(Form)`
  max-width: 375px;
  text-align: center;

  fieldset {
    padding: 21px 0;
    border: none;
  }
  
  input {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid #CED4DA;
    border-radius: 4px;
  }
`;