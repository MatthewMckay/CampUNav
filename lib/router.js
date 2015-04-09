/**
 * Created by matthewmckay on 4/8/15.
 */
Router.route('/', function() {
    this.layout('LoginLayout');
    this.render('loginHead', {to: 'header'});
    this.render('register', {to: 'rg'});
    this.render('login');
});