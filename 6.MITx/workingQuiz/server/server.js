////////////////////////
// Server
////////////////////////

Posts = new Meteor.Collection('posts');
teacherApprovedPosts = new Meteor.Collection('teacherApprovedPosts');


  Meteor.startup(function () {
    // code to run on server at startup
    if (Posts.find().count() == 0)
    {
      Posts.insert({'responseContent':'This class is great!', 'username':'Alice', timestamp: 0})
      Posts.insert({'responseContent':'How do we view our grades?', 'username':'Bob', timestamp:1})
    }
  });

