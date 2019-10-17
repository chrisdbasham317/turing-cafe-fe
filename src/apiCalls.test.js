import { resyFetch } from './apiCalls';


describe('resyFetch', () => {


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve()
      })
    })
  });

  it('should call fetch with the correct url', () => {
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  })
})