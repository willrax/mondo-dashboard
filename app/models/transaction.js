import DS from 'ember-data';

export default DS.Model.extend({
  accountBalance: DS.attr('number'),
  amount: DS.attr('number'),
  attachments: DS.attr(),
  category: DS.attr('string'),
  created: DS.attr('date'),
  currency: DS.attr('string'),
  description: DS.attr('string'),
  isLoad: DS.attr('boolean'),
  merchant: DS.belongsTo('merchant', { async: false }),
  metadata: DS.attr(),
  notes: DS.attr('string'),
  settled: DS.attr('date')
});
