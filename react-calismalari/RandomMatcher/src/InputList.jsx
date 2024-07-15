import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputList = ({ label, value, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={onChange} />
    </FormGroup>
  );
};

export default InputList;
