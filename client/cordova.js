/**
 * Created by Yuki on 4/14/2015.
 */
if(Meteor.isCordova) {
    Meteor.startup(function () {

        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log(navigator.accelerometer);
        }

        navigator.compass.getCurrentHeading(compassSuccess, compassError);
        navigator.device - motion.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

    });

    compassSuccess = function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    compassError = function onError(error) {
        alert('CompassError: ' + error.code);
    };

    accelerometerSuccess = function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
        'Acceleration Y: ' + acceleration.y + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' +
        'Timestamp: ' + acceleration.timestamp + '\n');
    };

    accelerometerError = function onError() {
        alert('onError!');
    };
}
