import React from 'react';
import Wrapper from './styled/Form';
import jsonSchema from './schemas/json-schema.json';

import Button from "../Button";

const Field = ({ children }) => children;

const Form = ({ onSubmit }) => (
  <Wrapper
    schema={jsonSchema}
    FieldTemplate={Field}
    showErrorList={false}
    onSubmit={({ formData: { search } }) => onSubmit(search)}
  >
    <Button>Найти</Button>
  </Wrapper>
);

export default Form;