import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('account').then((accounts) => {
      const account = accounts.get('firstObject');
      this._asyncFetchWebhooks(account);

      return Ember.RSVP.hash({
        account: account,
        webhooks: this.store.peekAll('webhook')
      });
    });
  },

  setupController(controller, { account, webhooks }) {
    controller.set('account', account);
    controller.set('webhooks', webhooks);
  },

  _asyncFetchWebhooks(account) {
    this.store.query('webhook', { account_id: account.get('id') });
  }
});
