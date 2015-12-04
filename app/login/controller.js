import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  email: '',
  password: '',

  actions: {
    async authenticate() {
      this.send('loading');
      await this.get('session').authenticate(this.get('email'), this.get('password'));
      this.send('finished');
      this.transitionToRoute('authenticated.transactions');
    }
  }
});
