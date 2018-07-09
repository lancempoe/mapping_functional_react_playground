import { shallow } from 'enzyme';
import React from 'react';
import TraceName from '../../components/trace-name';

describe('TraceName', () => {
  let component;
  const props = {
    name: 'Rose',
  };

  beforeEach(() => {
    component = shallow(<TraceName {...props} />);
  });

  it('correct renders the name', () => {
    expect(component.text()).toEqual(props.name);
  });
});
