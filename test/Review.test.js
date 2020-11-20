import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/Feed/Review';

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