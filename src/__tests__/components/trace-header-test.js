import { shallow } from 'enzyme';
import React from 'react';
import TraceHeader from '../../components/trace-header';

describe('TraceHeader', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TraceHeader />);
  });

  it('renders the correct header for Duration', () => {
    expect(component.text()).toContain('Duration (ms)');
  });

  it('renders the correct header for Duration (%)', () => {
    expect(component.text()).toContain('Duration (%)');
  });

  it('renders the correct header for Segment', () => {
    expect(component.text()).toContain('Segment');
  });

  it('renders the correct header for Timestamp (s)', () => {
    expect(component.text()).toContain('Timestamp (s)');
  });
});
