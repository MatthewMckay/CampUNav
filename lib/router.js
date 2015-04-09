/**
 * Created by matthewmckay on 4/8/15.
 */
Router.route('/', function() {
    this.layout('LoginLayout');
    this.render('login');
    this.render('register', {to: 'rg'});
});