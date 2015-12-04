import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr(),
  category: DS.attr('string'),
  created: DS.attr('date'),
  emoji: DS.attr('string'),
  logo: DS.attr('string'),
  name: DS.attr('string'),
  online: DS.attr('boolean')
});
