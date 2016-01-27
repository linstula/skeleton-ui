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
      return promise.finally((value) => {
        set(this, 'isSettled', true);
      });
    }
  })
});
