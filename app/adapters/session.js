import DS from 'ember-data';

export default DS.LSAdapter.extend({
  namespace: 'mondo',

  shouldBackgroundReloadRecord: function() {
    return false;
  },

  shouldReloadAll: function() {
    return true;
  }
});
