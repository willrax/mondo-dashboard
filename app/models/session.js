import DS from 'ember-data';

export default DS.Model.extend({
  authToken: DS.attr('string'),
  refreshToken: DS.attr('string')
});
