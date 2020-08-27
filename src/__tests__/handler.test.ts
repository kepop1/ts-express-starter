import { getAllWidgets } from '../handlers/index';

jest.mock('../models/Widget');
import Widget from '../models/Widget';

describe('Get all widgets handler', () => {
  test('returns 200 response for /widgets', async () => {
    (Widget.find as jest.Mock).mockResolvedValueOnce([
      {
        colors: {
          brandColor1: '#FFFFFF',
          brandColor2: '#F9FAFA',
          brandColor1Text: '#e8ebeb',
          brandColor2Text: '#d1d7d7',
          headerColor: '#bac3c3',
          lightText: '#a3afaf',
          darkText: '#8c9b9b',
          entryPointBackground: '#707c7c',
        },
        _id: '5f47c61fbd481e2e000bd23e',
        companyName: 'Test company name',
        welcomeMessage: 'Test welcome message',
      },
    ]);

    const statusReturn = {
      json: jest.fn(),
    };

    const response = {
      status: jest.fn().mockReturnValue(statusReturn),
    };

    const expected = {
      widgets: [
        {
          colors: {
            brandColor1: '#FFFFFF',
            brandColor2: '#F9FAFA',
            brandColor1Text: '#e8ebeb',
            brandColor2Text: '#d1d7d7',
            headerColor: '#bac3c3',
            lightText: '#a3afaf',
            darkText: '#8c9b9b',
            entryPointBackground: '#707c7c',
          },
          _id: '5f47c61fbd481e2e000bd23e',
          companyName: 'Test company name',
          welcomeMessage: 'Test welcome message',
        },
      ],
    };

    await getAllWidgets(undefined as any, response as any);

    expect(response.status).toBeCalledTimes(1);
    expect(response.status).toBeCalledWith(200);
    expect(statusReturn.json).toBeCalledTimes(1);
    expect(statusReturn.json).toBeCalledWith(expected);
  });

  test('returns 404 response for when /widgets returns no data', async () => {
    (Widget.find as jest.Mock).mockRejectedValueOnce([{}]);

    const statusReturn = {
      json: jest.fn(),
    };

    const response = {
      status: jest.fn().mockReturnValue(statusReturn),
    };

    const expected = {
      message: 'No data found',
    };

    await getAllWidgets(undefined as any, response as any);

    expect(response.status).toBeCalledTimes(1);
    expect(response.status).toBeCalledWith(404);
    expect(statusReturn.json).toBeCalledTimes(1);
    expect(statusReturn.json).toBeCalledWith(expected);
  });
});
