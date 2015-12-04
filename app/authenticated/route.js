import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  async beforeModel() {
    await this.get('session').fetchCurrentSession();

    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model() {
    return this.get('session').refresh();
  }
});
