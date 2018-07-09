import { shallow } from 'enzyme';
import React from 'react';
import Duration from '../../components/duration';

describe('Duration', () => {
  let component;
  const props = {
    durationTime: 12345,
  };

  beforeEach(() => {
    component = shallow(<Duration {...props} />);
  });

  it('renders correct number format', () => {
    expect(component.text())
      .toEqual(Number(props.durationTime).toLocaleString());
  });
});
