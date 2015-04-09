/**
 * Created by matthewmckay on 4/8/15.
 */
if(Meteor.isClient){
    Template.register.events({
        'submit form': function(event, template){
            event.preventDefault();
            var emailVar = template.find('#rEml').value;
            var passwordVar = template.find('#rPwd').value;
            console.log('Form Submitted');
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
        }
    })

    Template.login.events({
        'submit form': function(event, template){
            event.preventDefault();
            var emailVar = template.find('#lEml').value;
            var passwordVar = template.find('#lPwd').value;
            console.log('Form Submitted');
        }
    })
}