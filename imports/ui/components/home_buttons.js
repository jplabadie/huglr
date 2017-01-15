import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';


import './home_buttons.html';

Template.home_buttons.events({
  'click .hug_me' (event) {
    if (Session.get("hug_me_status")=="on"){
      $('li.hug_me_tab').removeClass('active');
      $('li.me_hug_tab').removeClass('active');
      Session.set("hug_me_status", "off");
      Session.set("hug_status", "No Hugs");
    }
    else{
      Session.set("hug_me_status", "on");
      $('li.hug_me_tab').addClass('active');
      $('li.me_hug_tab').removeClass('active');
      Session.set("hug_status", "Hug Me");
    }


  },
  'click .me_hug' (event) {
    if (Session.get("me_hug_status")=="on"){
      $('li.me_hug_tab').removeClass('active');
      $('li.hug_me_tab').removeClass('active');
      Session.set("me_hug_status", "off");
      Session.set("hug_status", "No Hugs");
    }
    else{
      Session.set("me_hug_status", "on");
      $('li.me_hug_tab').addClass('active');
      $('li.hug_me_tab').removeClass('active');
      Session.set("hug_status", "Me Hug");
    }
  }
})
