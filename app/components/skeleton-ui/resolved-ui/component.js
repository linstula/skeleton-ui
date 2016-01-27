import Ember from 'ember';

const {
  Component,
  computed,
  get,
  set
} = Ember;

export default Component.extend({
  promise: computed({
    set(key, promise) {
      return promise.then((value) => {
        return set(this, 'result', value);
      });
    }
  })
});
