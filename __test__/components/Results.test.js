import * as React from 'react';
import Results from '../../components/Results';
import Inhabitants from '../../components/Inhabitants';
import { createShallow } from '@material-ui/core/test-utils';


describe('Results', () => {

  let props;
  beforeEach(() => {
    props = {
      state: {
        inhabitants: {
          items: [],
          itemsPerPage: 9,
          page: 1,
          display: [
            { id: 0,
              name: 'Tobus Quickwhistle',
              thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
              age: 306,
              weight: 39.065952,
              height: 107.75835,
              hair_color: 'Pink',
              professions: ['Metalworker','Woodcarver','Stonecarver',' Tinker','Tailor','Potter'],
              friends: ['Cogwitz Chillwidget','Tinadette Chillbuster']
            },
            { id: 1,
              name: 'Tobus Quickwhistle',
              thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
              age: 306,
              weight: 39.065952,
              height: 107.75835,
              hair_color: 'Pink',
              professions: ['Metalworker','Woodcarver','Stonecarver',' Tinker','Tailor','Potter'],
              friends: ['Cogwitz Chillwidget','Tinadette Chillbuster']
            },
            { id: 2,
              name: 'Tobus Quickwhistle',
              thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
              age: 306,
              weight: 39.065952,
              height: 107.75835,
              hair_color: 'Pink',
              professions: ['Metalworker','Woodcarver','Stonecarver',' Tinker','Tailor','Potter'],
              friends: ['Cogwitz Chillwidget','Tinadette Chillbuster']
            }
          ]
        },
        filters:{
          name: '',

          age:{
            selectFrom: 1,
            selectTo: 500,
            min: 1,
            max: 500
          },

          hair:{
            selected: '',
            options: []
          },

          height : {
            selectFrom: 0,
            selectTo: 200,
            min: 0,
            max: 200
          },

          professions: {
            selected: '',
            options: []
          },

          weight:{
            selectFrom: 0,
            selectTo: 100,
            min: 0,
            max: 100
          }
        }
      }
    };
  });

  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('Should find 3 Inhabitants', () => {
    const wrapper = shallow(<Results {...props}/>);
    expect(wrapper.dive().find(Inhabitants).length).toBe(3);
  });
});


