import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/Feed/Review';

describe('UserBar Module Tests', () => {
  it('accepts userObj with accurate keys', () => {
    const component = shallow(<Userbar />);
    expect(component).toHaveProp('username');
  });
});


describe('Information Module Tests', () => {
  it('accepts reviewObj with accurate keys', () => {
    const component = shallow(<Info />);
    expect(component).toHaveProp('rating');
   });

  // it('responds to click event for share button', () => {
  //   const component = shallow(<Info />);

  //   expect(component).toHaveProp('userPopup');

  //   component
  //   .find('button#user-button')
  //   .simulate('click');

  //   expect(userPopup).toHaveBeenCalled();
  // });

});