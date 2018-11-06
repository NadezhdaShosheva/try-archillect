import React, { Component } from 'react';
import ImageForm from './components/ImageForm';
import DefaultImage from './components/DefaultImage';
import styled from 'styled-components';
import image from './default.gif';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class App extends Component {
    state = {
      imageUrl: image,
      value: '',
    };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <Wrapper>
        <DefaultImage
          imageUrl={this.state.imageUrl}
        />
        <ImageForm 
          value={this.value}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default App;
