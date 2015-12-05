import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  address: DS.attr(),
  category: DS.attr('string'),
  created: DS.attr('date'),
  emoji: DS.attr('string'),
  logo: DS.attr('string'),
  name: DS.attr('string'),
  online: DS.attr('boolean'),

  latitude: Ember.computed('address.latitude', function() {
    return this.get('address.latitude');
  }),

  longitude: Ember.computed('address.longitude', function() {
    return this.get('address.longitude');
  }),

  fullLocation: Ember.computed('latitude', 'longitude', function() {
    return [this.get('latitude'), this.get('longitude')]
  })
});
