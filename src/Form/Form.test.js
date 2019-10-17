import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper
  let addReservation = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Form
      addReservation={addReservation}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update name state when handleChange is called', () => {
    let mockEvent = {
      target: {
        name: 'name',
        value: 'Chris'
      }
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('name')).toEqual('Chris');
  });

  it('should update name state when handleChange is called', () => {
    let mockEvent = {
      target: {
        name: 'date',
        value: '06/30'
      }
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('date')).toEqual('06/30');
  });
  
  it('should update name state when handleChange is called', () => {
    let mockEvent = {
      target: {
        name: 'time',
        value: '06:30'
      }
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('time')).toEqual('06:30');
  });

  it('should update name state when handleChange is called', () => {
    let mockEvent = {
      target: {
        name: 'number',
        value: 4
      }
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('number')).toEqual(4);
  });  
})
