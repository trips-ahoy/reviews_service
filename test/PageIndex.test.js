import React from 'react';
import { shallow } from 'enzyme';
import PageIndex from '../client/src/PageIndex';

describe('PageIndex Module Tests', () => {
   it('click event for page change', () => {
      const wrapper = shallow(<PageIndex />);
      expect(wrapper).toHaveProp('changePage');

      const component = shallow(<button onClick={changePage} />);

      component
      .find('button')
      .simulate('click');

      expect(changePage).toHaveBeenCalled();
    });


});
