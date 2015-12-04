import DS from 'ember-data';

export default DS.Model.extend({
  accountNumber: DS.attr('number'),
  created: DS.attr('date'),
  description: DS.attr('string'),
  sortCode: DS.attr('number')
});
