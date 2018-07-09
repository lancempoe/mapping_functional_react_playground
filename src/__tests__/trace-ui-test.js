import React from 'react';
import { shallow } from 'enzyme';
import TraceUi from '../trace-ui';

describe('TraceUi', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TraceUi />);
  });

  it('renders a TraceHeader', () => {
    expect(component.find('TraceHeader').length).toEqual(1);
  });
});
