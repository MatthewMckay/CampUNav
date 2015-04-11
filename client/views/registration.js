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
            if (Meteor.user()) {
                console.log("congrats");
                Router.go('/myrooms');
            }
            else
            {
                console.log('something went wrong')
            }
        }
    })

    Template.login.events({
        'submit form': function(event, template){
            event.preventDefault();
            var emailVar = template.find('#lEml').value;
            var passwordVar = template.find('#lPwd').value;
            console.log('Form Submitted');
            Meteor.loginWithPassword(emailVar, passwordVar, function() {
                if (Meteor.user()) {
                    console.log("congrats");
                    Router.go('/myrooms');
                }
                else {
                    console.log('something went wrong')
                }
            });
        }
    })

/*    Tracker.autorun(function() {
        if (Meteor.user()) {
            console.log("congrats");
            Router.go('/myrooms');
        }
        else
            console.log("please login")
    });*/

    Template.ftr.events({
       'click .logout': function(event){
           event.preventDefault();
           Meteor.logout(function() {
              Router.go('/');
           });
       }
    });
}