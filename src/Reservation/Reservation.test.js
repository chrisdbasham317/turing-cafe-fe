import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {
  let wrapper
  let resData = {
    id: 5,
    name: 'John',
    date: '06/17',
    time: '6:30',
    number: 4
  }
  beforeEach(() => {
    wrapper = shallow(<Reservation
      resData={resData}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
