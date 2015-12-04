import Ember from 'ember';

export default Ember.Controller.extend({
  transactionSorting: ['created:desc'],
  sortedTransactions: Ember.computed.sort('transactions', 'transactionSorting'),

  mostRecentTransaction: Ember.computed('sortedTransactions', function() {
    return this.get('sortedTransactions.firstObject');
  }),

  accountBalance: Ember.computed('mostRecentTransaction', function() {
    return this.get('mostRecentTransaction.accountBalance') / 100;
  })
});
