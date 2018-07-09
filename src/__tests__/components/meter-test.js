import { shallow } from 'enzyme';
import React from 'react';
import Meter from '../../components/meter';

describe('Meter', () => {
  let component;
  const props = {
    percent: 0.30,
  };

  beforeEach(() => {
    component = shallow(<Meter {...props} />);
  });

  it('renders an svg', () => {
    expect(component.find('svg').length).toEqual(1);
  });

  it('sets the rect size', () => {
    expect(component.find('rect').length).toEqual(2);
  });

  it('sets the rect color box correctly', () => {
    expect(component.find('rect').at(1).props().width).toEqual(21);
  });

  it('sets the white rect box correctly', () => {
    expect(component.find('rect').at(0).props().width).toEqual(70);
  });
});
