import { shallow } from 'enzyme';
import React from 'react';
import Trace from '../../components/trace';

describe('Trace', () => {
  let component;
  const props = {
    durationTime: 2345,
    durationPercentage: 0.3,
    name: 'Dr. Who',
    timestamp: 5432,
    isSlowestSegment: false,
  };

  beforeEach(() => {
    component = shallow(<Trace {...props} />);
  });

  it('renders a Duration component', () => {
    expect(component.find('Duration').length).toEqual(1);
  });

  it('renders a DurationPercentage component', () => {
    expect(component.find('DurationPercentage').length).toEqual(1);
  });

  it('renders a TraceName component', () => {
    expect(component.find('TraceName').length).toEqual(1);
  });

  it('renders a Timestamp component', () => {
    expect(component.find('Timestamp').length).toEqual(1);
  });
});
