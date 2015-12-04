import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['pull-right'],

  hovering: false,

  click() {
    this.attrs['onClick']();
  },

  mouseLeave() {
    this.attrs['mouseOut']();
  },

  mouseEnter() {
    this.attrs['mouseEnter']();
  }
});
