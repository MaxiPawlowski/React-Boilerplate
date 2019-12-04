import React from 'react';
import { shallow } from 'enzyme';
import { StyledApp as Landing } from "./index";

describe('App', () => {
  let wrapper;

  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(<Landing />).dive();
    });

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
