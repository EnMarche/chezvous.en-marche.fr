import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

faker.locale = 'fr';

export default Factory.extend({
  objectID: i => i,
  name: () => faker.address.city(),
  postal_code: () => [faker.address.zipCode()],
  insee_code: () => faker.address.zipCode(),
  department: () => faker.random.number(100),
  coordinates: () => ([
    48.554137,
    7.76552
  ]),
  markers: () => ([
    {
      "type": "new_public_house",
      "coordinates": [
        48.554137,
        7.76552
      ]
    },
    {
      "type": "new_public_house",
      "coordinates": [
        48.5815276,
        7.7407641
      ]
    }
  ]),
  summary: () => ([
    {
      "type": "fiber_optic_coverage",
      "data": {
        "new_installations": 23,
        "coverage": 8
      }
    },
    {
      "type": "total_new_houses",
      "data": {
        "houses_count": 2
      }
    }
  ]),
});
