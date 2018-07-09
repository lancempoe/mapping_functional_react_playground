import { shallow } from 'enzyme';
import React from 'react';
import DurationPercentage from '../../components/duration-percentage';

describe('DurationPercentage', () => {
  let component;
  const props = {
    durationPercentage: 0.021,
  };

  beforeEach(() => {
    component = shallow(<DurationPercentage {...props} />);
  });

  it('renders a ProgressBar component', () => {
    expect(component.find('Meter').length).toEqual(1);
  });

  it('renders a ProgressBar component', () => {
    expect(component.text()).toContain('2.1%');
  });
});
