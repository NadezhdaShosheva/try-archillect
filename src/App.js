import React, { Component } from 'react';
import ImageForm from './components/ImageForm';
import DefaultImage from './components/DefaultImage';
import Result from './components/Result';
import GetImage from './services/getImage';
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
    defaultImage: image,
    resultImage: '',
    value: '',
    hasResult: false,
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resultImageUrl = await GetImage(this.state.value);
      this.setState({
        resultImage: resultImageUrl.url,
        hasResult: true,
      });
    } catch (error) {
      this.setState({
        hasResult: false,
      });
    }
  }

  render() {
    return (
      <Wrapper>
        { this.state.hasResult ?
          <Result
            resultImage={this.state.resultImage}
          /> :
          <DefaultImage
            defaultImage={this.state.defaultImage}
          />
        }
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
