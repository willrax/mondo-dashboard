import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'mondo/config/environment';

export default AjaxService.extend({
  host: ENV.authHost
});
