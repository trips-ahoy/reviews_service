import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/Feed/Review';
import Userbar from '../client/src/Feed/Userbar';
import Info from '../client/src/Feed/Info';

describe('UserBar Module Tests', () => {
  it('passes through user information', () => {
    const component = shallow(<Userbar />);
    expect(component).toHaveProp('user');
  });
});


describe('Information Module Tests', () => {
  it('passes through review information', () => {
    const component = shallow(<Info />);
    expect(component).toHaveProp('info');
   });

});