import Ember from 'ember';

const {
  Route,
  RSVP: { Promise },
  set
} = Ember;

let feedItems = [
  {
    content: 'Winter is coming...',
    createdAt: '12/1/2015 @ 10:58am',
    user: {
      name: 'Jon Snow',
      avatar: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg'
    }
  },
  {
    content: 'Wait, is winter coming?',
    createdAt: '12/25/2015 @ 10:58am',
    user: {
      name: 'Jon Snow',
      avatar: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg'
    }
  },
  {
    content: 'Yep, winter is here.',
    createdAt: '1/23/2016 @ 10:58am',
    user: {
      name: 'Jon Snow',
      avatar: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg'
    }
  },
];

export default Route.extend({
  setupController(controller) {
    set(controller, 'model', this.slowAsyncRequest());
  },

  slowAsyncRequest() {
    return new Promise(function(resolve, reject) {
      Ember.run.later(function() {
        console.log('RESOLVED');
        resolve(feedItems);
      }, 2000);
    });
  }
});
