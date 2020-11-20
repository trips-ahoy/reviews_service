import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../client/src//Filters/Filters';
import Rating from '../client/src/Filters/Rating';
import TravelType from '../client/src/Filters/TravelType';
import Season from '../client/src/Filters/Season';
import Language from '../client/src/Filters/Language';

describe('Filters Module Tests', () => {

    it('should pass in summary, handleChange, and handle click event for ratings', () => {

      const wrapper = shallow(<Filters />);
      expect(wrapper.find(Rating)).toHaveProp('summary');
      expect(wrapper.find(Rating)).toHaveProp('handleChange');

      const component = shallow(<Rating />);

      component
      .find('button')
      .simulate('click');

      expect(handleChange).toHaveBeenCalled();
    });


    it('should pass in summary, handleChange, and handle click event for travel type', () => {
      const wrapper = shallow(<Filters />);
      expect(wrapper.find(TravelType)).toHaveProp('types');
      expect(wrapper.find(TravelType)).toHaveProp('handleChange');

      const component = shallow(<TravelType />);

      component
      .find('button')
      .simulate('click');

      expect(handleChange).toHaveBeenCalled();
    });

    it('should pass in summary, handleChange, and handle click event for seasons', () => {
      const wrapper = shallow(<Filters />);
      expect(wrapper.find(Season)).toHaveProp('seasons');
      expect(wrapper.find(Season)).toHaveProp('handleChange');

      const component = shallow(<Season />);

      component
      .find('button')
      .simulate('click');

      expect(handleChange).toHaveBeenCalled();
    });

    it('should pass in summary, handleChange, and handle click event for languages', () => {
      const wrapper = shallow(<Filters />);
      expect(wrapper.find(Language)).toHaveProp('language');
      expect(wrapper.find(Language)).toHaveProp('handleChange');

      const component = shallow(<Language />);

      component
      .find('button')
      .simulate('click');

      expect(handleChange).toHaveBeenCalled();
    });

});
