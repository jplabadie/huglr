import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';

import './user.html';

Template.body.events({
    'submit .user-preferences'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });
}
});