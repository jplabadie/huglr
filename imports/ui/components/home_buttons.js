import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';


import './home_buttons.html';

Template.home_buttons.events({
  'click .hug_me' (event) {
    $('li.hug_me_tab').addClass('active');
    $('li.me_hug_tab').removeClass('active');

    Session.set("hug_status", "Hug Me");

  },
  'click .me_hug' (event) {
    $('li.me_hug_tab').addClass('active');
    $('li.hug_me_tab').removeClass('active');
    Session.set("hug_status", "Me Hug");

  }
})
