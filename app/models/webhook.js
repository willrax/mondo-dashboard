import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  url: DS.attr('string')
});
