import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/layouts/default.js';
import '../../ui/pages/home.js';


const authroutes = FlowRouter.group({
  name: 'authenticated',
})

authroutes.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('default', {yield: 'home'})
  }
})
