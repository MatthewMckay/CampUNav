/**
 * Created by matthewmckay on 4/11/15.
 */
Meteor.publish("rmsSaved", function () {
    return SavedRooms.find({ createdBy: this.userId });
});

Meteor.publish("courses", function() {
   return Courses.find().fetch();
});