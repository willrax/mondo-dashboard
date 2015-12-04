import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'mondo/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.mondoHost,
  session: Ember.inject.service(),

  headers: Ember.computed('session.authToken', {
    get() {
      let headers = {};
      const authToken = this.get('session.authToken');
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      return headers;
    }
  })
});
