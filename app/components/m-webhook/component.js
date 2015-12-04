import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item', 'row', 'webhook'],
  tagName: 'div',

  attrs: {
    webhook: null
  },

  actions: {
    deleteWebhook() {
      this.get('webhook').destroyRecord();
    }
  }
});
