import React, { Component } from 'react';
import styled from 'styled-components';
import ImageForm from './components/ImageForm';
import DefaultImage from './components/DefaultImage';
import Result from './components/Result';
import GetImage from './services/getImage';
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
    this.setState({ value: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const value = this.state;
      const resultImageUrl = await GetImage(value);
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
    const {
      hasResult,
      resultImage,
      defaultImage,
      value,
      handleSubmit,
      handleChange,
    } = this.state;

    return (
      <Wrapper>
        { hasResult
          ? (
            <Result
              resultImage={resultImage}
            />
          )
          : (
            <DefaultImage
              defaultImage={defaultImage}
            />
          )
        }
        <ImageForm
          value={value}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </Wrapper>
    );
  }
}

export default App;
