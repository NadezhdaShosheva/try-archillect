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
      imageUrl,
    };

    // Act
    const expectedState = reducer(initialState, action);

    // Arrange
    expect(expectedState.resultImage).toEqual(expectedResultImage);
    expect(expectedState.hasResult).toEqual(expectedHasResult);
    expect(expectedState.hasCounter).toEqual(expectedHasCounter);
  });

  test('reducer - IMAGE_DOES_NOT_EXIST', () => {
    // Assert
    const timeLeft = 31416222092716;
    const expectedTimeLeft = timeLeft;
    const expectedHasResult = true;
    const expectedHasCounter = true;

    const action = {
      type: 'IMAGE_DOES_NOT_EXIST',
      timeLeft,
    };

    // Act
    const expectedState = reducer(initialState, action);

    // Arrange
    expect(expectedState.timeLeft).toEqual(expectedTimeLeft);
    expect(expectedState.hasResult).toEqual(expectedHasResult);
    expect(expectedState.hasCounter).toEqual(expectedHasCounter);
  });

  test('reducer - DEFAULT_STATE', () => {
    // Assert
    const expectedHasResult = false;
    const expectedHasCounter = false;

    // Act
    const expectedState = reducer(initialState, 'DEFAULT_STATE');

    // Arrange
    expect(expectedState.hasResult).toEqual(expectedHasResult);
    expect(expectedState.hasCounter).toEqual(expectedHasCounter);
  });
});
