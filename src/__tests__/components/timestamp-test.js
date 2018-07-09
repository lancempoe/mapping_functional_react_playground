import { shallow } from 'enzyme';
import React from 'react';
import Timestamp from '../../components/timestamp';

describe('Timestamp', () => {
  let component;
  const props = {
    timestamp: 12345,
  };

  beforeEach(() => {
    component = shallow(<Timestamp {...props} />);
  });

  it('renders the correct format of the timestamp', () => {
    expect(component.text()).toEqual(`${props.timestamp / 1000}`);
  });
});
