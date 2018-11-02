import React, { Component } from 'react';
import styled from 'styled-components';
import image from './default.gif';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImagePreview = styled.div`
  margin: 20px;
  text-align: center;

  img {
    max-height: 400px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
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

class App extends Component {
  state = {
    imageUrl: image,
  };

  render() {
    return (
      <Wrapper>
        <ImagePreview>
          <img src={this.state.imageUrl} alt="default" />
        </ImagePreview>
        <Form>
          <Input type="nubmer"></Input>
          <Button>Get inspired</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default App;
