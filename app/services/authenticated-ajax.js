import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'mondo/config/environment';

export default AjaxService.extend({
  host: ENV.mondoHost,
  session: Ember.inject.service(),

  headers: Ember.computed('session.authToken', {
    get() {
      let headers = {};
      const authToken = this.get('session.authToken');
      if (authToken) {
        headers['Authorization'] = `Bearer ${this.get('session.authToken')}`;
      }
      return headers;
    }
  })
});
