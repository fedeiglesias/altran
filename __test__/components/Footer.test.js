import * as React from 'react';
import {mount} from 'enzyme';
import Footer from '../../components/Footer';
import { createShallow } from '@material-ui/core/test-utils';

describe('Footer', () => {

  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render anchor with Name', () => {
    const wrap = shallow(<Footer/>);
    expect(wrap.dive().find('a').text()).toBe('Federico Iglesias');
  });
});
