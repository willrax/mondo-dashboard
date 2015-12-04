import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    let accounts = await this.store.findAll('account');
    const accountId = accounts.get('firstObject.id');
    return this.store.query('transaction', { account_id: accountId, expand: ["merchant"] });
  },

  setupController(controller, model) {
    controller.set('transactions', model);
  }
});
