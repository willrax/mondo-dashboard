import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('authenticated', { path: '/'}, function() {
    this.route('transactions');
    this.route('webhooks');
  });
});

export default Router;
