import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    logOut() {
      this.get('session').logOut().then(() => {
        this.transitionToRoute('login');
      });
    }
  }
});
