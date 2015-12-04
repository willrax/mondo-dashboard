import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  session: null,
  store: Ember.inject.service(),

  authToken: Ember.computed.alias('session.authToken'),
  refreshToken: Ember.computed.alias('session.refreshToken'),
  isAuthenticated: Ember.computed.notEmpty('session.authToken'),

  async fetchCurrentSession() {
    let sessions = await this.get('store').findAll('session');

    if (Ember.isEmpty(sessions)) {
      let newSession = await this.get('store').createRecord('session');
      await newSession.save();
      this.set('session', newSession);
    } else {
      this.set('session', sessions.get('firstObject'));
    }

    return;
  },

  async authenticate(username, password) {
    let response = await this.get('ajax').post('/oauth/token', { data: JSON.stringify({
        'username': username,
        'password': password
      })
    });

    this.get('session').setProperties({
      authToken: response.access_token,
      refreshToken: response.refresh_token
    });
    return this.get('session').save();
  },

  logOut() {
    return this.get('session').destroyRecord();
  },

  async refresh() {
    let response = await this.get('ajax').post('/oauth/refresh', {
      data: JSON.stringify({
        token: this.get('refreshToken')
      })
    });

    this.get('session').setProperties({
      authToken: response.access_token,
      refreshToken: response.refresh_token
    });

    return this.get('session').save();
  }
});
