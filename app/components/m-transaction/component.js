import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item', 'row', 'transaction'],
  tagName: 'div',

  attrs: {
    transaction: null
  },

  amount: Ember.computed('transaction.amount', function() {
    return this.get('transaction.amount') / 100;
  }),

  merchant: Ember.computed.alias('transaction.merchant'),

  title: Ember.computed('transaction.isLoad', 'merchant.name', function() {
    if (this.get('transaction.isLoad')) {
      return 'Mondo Top Up';
    } else {
      return this.get('merchant.name');
    }
  }),

  logo: Ember.computed('transaction.isLoad', 'merchant.logo', function() {
    if (this.get('transaction.isLoad')) {
      return 'https://dl.dropboxusercontent.com/u/4162565/mondo.png';
    } else {
      return this.get('merchant.logo');
    }
  })
});
