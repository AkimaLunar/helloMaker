/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

 Meteor.publish('classes', function() {
  return Classes.find();
});
