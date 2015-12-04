import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, {
  intl: Ember.inject.service(),

  beforeModel() {
    this.get('intl').setLocale('en-gb');
  }
});
