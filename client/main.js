import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

currentUser;

Template.loginButtons.onLogin( function onUserLogin(){
  currentUser = Meteor.user();
});

Template.editUser.onClick( function onEditUser(){

});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes']
    },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});