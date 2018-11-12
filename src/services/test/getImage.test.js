describe('getImage', () => {
  const BASE_URL = 'https://archillect-api.now.sh/visuals';
  const mockAxios = {
    get: () => {},
  };
  jest.mock('axios', () => mockAxios);
  const getImage = require('../getImage').default;

  test('getImage - happy path', async () => {
    // Arrange
    const expectedImageId = 54321;
    const expectedImageUrl = 'http://41.media.tumblr.com/8381c9d45c8c99f17faa198cf57b9727/tumblr_n28zfgPQRT1r0zs8io1_1280.jpg';
    const expectedImageResponse = { url: expectedImageUrl };
    const expectedGetPath = `${BASE_URL}/${expectedImageId}`;
    const expectedResponse = {
      data: {
        id: expectedImageId,
        imageSource: expectedImageUrl,
        original: `http://archillect.com/${expectedImageId}`,
        sourceLinks: [
          'https://www.google.com/searchbyimage?safe=off&image_url=http://41.media.tumblr.com/8381c9d45c8c99f17faa198cf57b9727/tumblr_n28zfgPQRT1r0zs8io1_1280.jpg'   
        ],
      },
    };
    mockAxios.get = jest.fn(() => new Promise((resolve) => { resolve(expectedResponse); }));

    // Act
    const actualImageResponse = await getImage(expectedImageId);

    // Assert
    expect(actualImageResponse).toEqual(expectedImageResponse);
    expect(mockAxios.get).toHaveBeenCalledWith(expectedGetPath);
  });
});
