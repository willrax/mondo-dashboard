import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  addingWebhook: false,
  authenticatedAjax: Ember.inject.service(),
  session: Ember.inject.service(),
  url: '',

  validations: {
    'url': {
      presence: true
    }
  },

  noWebhooksEmoji: Ember.computed('addHovering', function() {
    if (this.get('addingWebhook')) {
      return '😃';
    }

    if (this.get('addHovering')) {
      return '😃';
    } else {
      return '🙁';
    }
  }),

  toggleText: Ember.computed('addingWebhook', function() {
    if (this.get('addingWebhook')) {
      return 'Cancel';
    } else {
      return 'Add New';
    }
  }),

  actions: {
    toggleAdding() {
      this.toggleProperty('addingWebhook');
    },

    mouseEnterAdd() {
      this.set('addHovering', true);
    },

    mouseOutAdd() {
      this.set('addHovering', false);
    },

    saveWebhook() {
      this.send('loading');

      this.get('authenticatedAjax').post('/webhooks', {
        data: {
          url: this.get('url'),
          account_id: this.get('account.id')
        }
      }).then((payload) => {
        this.store.pushPayload(payload);
        this.setProperties({
          addingWebhook: false,
          url: ''
        });

        this.send('finished');
      });
    }
  }
});
