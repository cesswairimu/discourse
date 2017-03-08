import { default as computed } from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  // subclasses need this
  layoutName: 'components/d-button',

  tagName: 'button',
  classNameBindings: [':btn', 'noText'],
  attributeBindings: ['disabled', 'translatedTitle:title'],

  noText: Ember.computed.empty('translatedLabel'), //if translatedLable = null/empty then noText = true

  @computed("title") //this.get('title')
  translatedTitle(title) {
    if (title) return I18n.t(title);
  },

  @computed("label")//this.get('label')
  translatedLabel(label) {
    if (label) return I18n.t(label);
  },

  click() {
    this.sendAction("action", this.get("actionParam"));
    return false;
  }
});
