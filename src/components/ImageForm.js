import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
  width: 100%;
  max-width: 350px;
  margin: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 0 0 20px;
  padding: 5px 15px;
  font-size: 17px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  padding: 3px 15px;
  margin: auto;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  background-color: #5c739c;
  color: #fff;
  font-size: 17px;
  border-radius: 20px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

const ImageForm = (props) => {
  const { onSubmit, value, onChange } = props;

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="nubmer"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">Get inspired</Button>
    </Form>
  );
};

ImageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default ImageForm;
