import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../client/src/Filters';
import Rating from '../client/src/Filters/Rating';
import TravelType from '../client/src/Filters/TravelType';
import Season from '../client/src/Filters/Season';
import Lang from '../client/src/Filters/Lang';

describe('Filters Module Tests', () => {

    it('should pass in ratings, filterRating, and handle click event', () => {

      const wrapper = shallow(<Filters />);
      expect(wrapper.find(Rating)).toHaveProp('ratings');
      expect(wrapper.find(Rating)).toHaveProp('filterRating');

      const component = shallow(<Rating />);

      component
      .find('button#rating-button1')
      .simulate('click');

      expect(filterRating).toHaveBeenCalled();
    });


    it('should pass in types, filterType, and handle click event', () => {
      const wrapper = shallow(<Filters />);
      expect(wrapper.find(TravelType)).toHaveProp('types');
      expect(wrapper.find(TravelType)).toHaveProp('filterType');

      const component = shallow(<TravelType />);

      component
      .find('button#type-button1')
      .simulate('click');

      expect(filterType).toHaveBeenCalled();
    });

    it('should pass in seasons, filterSeason, and handle click event', () => {
      const wrapper = shallow(<Filters />);
      expect(wrapper.find(Season)).toHaveProp('seasons');
      expect(wrapper.find(Season)).toHaveProp('filterSeason');

      const component = shallow(<Season />);

      component
      .find('button#season-button1')
      .simulate('click');

      expect(filterSeason).toHaveBeenCalled();
    });

    it('should pass in languages, filterLang, and handle click event', () => {
      const wrapper = shallow(<Filters />);
      expect(wrapper.find(Lang)).toHaveProp('languages');
      expect(wrapper.find(Lang)).toHaveProp('filterLang');

      const component = shallow(<Language />);

      component
      .find('button#lang-button1')
      .simulate('click');

      expect(filterLang).toHaveBeenCalled();
    });

});
