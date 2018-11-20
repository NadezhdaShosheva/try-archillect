describe('reducer', () => {
  const reducerStore = require('../reducer');
  const reducer = require('../reducer').default;
  const { initialState } = reducerStore;

  test('reducer - GET_IMAGE_URL', () => {
    // Assert
    const imageUrl = 'http://41.media.tumblr.com/8381c9d45c8c99f17faa198cf57b9727/tumblr_n28zfgPQRT1r0zs8io1_1280.jpg';
    const expectedResultImage = imageUrl;
    const expectedHasResult = true;
    const expectedHasCounter = false;

    const action = {
      type: 'GET_IMAGE_URL',
      imageUrl: imageUrl,
    }
    
    // Act
    const expectedState = reducer(initialState, action);

    //Arrange
    expect(expectedState.resultImage).toEqual(expectedResultImage);
    expect(expectedState.hasResult).toEqual(expectedHasResult);
    expect(expectedState.hasCounter).toEqual(expectedHasCounter);
  });
});