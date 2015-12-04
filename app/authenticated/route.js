import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    return this.get('session').fetchCurrentSession().then(() => {
      if (!this.get('session.isAuthenticated')) {
        this.transitionTo('login');
      }
    });
  },

  model() {
    return this.get('session').refresh();
  }
});
