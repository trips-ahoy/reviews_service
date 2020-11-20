import React from 'react';
import { shallow } from 'enzyme';
import Feed from '../client/src/Feed/Feed';
import Review from '../client/src/Feed/Review';


describe('Feed Module Tests', () => {
   it('renders 5 <Review /> components', () => {
      const wrapper = shallow(<Feed />);
      expect(wrapper).toContainMatchingElements(5, 'Review');
      expect(wrapper).not.toContainMatchingElements(6, 'Review');
    });

});

