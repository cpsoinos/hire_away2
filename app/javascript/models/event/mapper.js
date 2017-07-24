import { DataStore } from 'js-data'
import { HttpAdapter } from 'js-data-http'

const store = new DataStore();
const httpAdapter = new HttpAdapter();

// "store" will now use an HTTP adapter by default
store.registerAdapter('http', httpAdapter, { 'default': true });

// Define a Mapper for a "user" resource

store.defineMapper('Event', {
  endpoint: 'events',
  schema: {
    type: 'object',
    properties: {
      id: {
        type: 'number'
      },
      // Demonstrate change detection, mark "age" as a field to be tracked
      name: {
        type: 'string',
      },
      start_time: {
        type: 'string',
      },
      end_time: {
        type: 'string',
      }
    }
  },
  // relations: {
  //   belongsTo: {
  //     Post: {
  //       localField: 'posts',
  //       foreignKey: 'userId'
  //     }
  //   }
  // }
})
