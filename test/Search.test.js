import React from 'react';
import { shallow } from 'enzyme';
import Search from '../client/src/Search';

describe('Search Module Tests', () => {
   it('filters reviews based on search', () => {
      const component = shallow(<Search />);

      component
      .find('button#search-button')
      .simulate('click');

      expect(filterSearch).toHaveBeenCalled();
    });

});
