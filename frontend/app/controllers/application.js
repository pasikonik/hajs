import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Controller.extend({
  session: inject.service(),

  dropdownOpen: false,

  actions: {
    toggleDropdown() {
      this.toggleProperty('dropdownOpen');
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});
