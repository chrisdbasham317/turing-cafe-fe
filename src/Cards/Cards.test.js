import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';

describe('Cards', () => {
  let wrapper
  let reservations = [{
    id: 5,
    name: 'John',
    date: '06/17',
    time: '6:30',
    number: 4
  },
    {
    id: 7,
    name: 'Chris',
    date: '06/18',
    time: '6:30',
    number: 5    
  }]
  beforeEach(() => {
    wrapper = shallow(<Cards
      resData={reservations}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
