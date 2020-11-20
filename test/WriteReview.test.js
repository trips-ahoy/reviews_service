import React from 'react';
import { shallow } from 'enzyme';
import WriteReview from '../client/src/WriteReview';

describe('Write Review Module Tests', () => {
   it('reponds to click event', () => {
      const wrapper = shallow(<WriteReview onClick={handleClick}/>);

      wrapper
      .find('button')
      .simulate('click');

      expect(handleClick).toHaveBeenCalled();
    });

});

