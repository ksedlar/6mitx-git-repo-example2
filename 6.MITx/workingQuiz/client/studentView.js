Posts = new Meteor.Collection('posts');
teacherApprovedPosts = new Meteor.Collection('teacherApprovedPosts');

////////////////////////
// CLIENT
////////////////////////

  Template.teacherView.lines = function () {  
    return Posts.find({}, {sort: {timestamp: 1}}).fetch();
  };
  
  function getCurrentUser () 
  {
    return Meteor.user().emails[0].address.split("@")[0]; 
  }
  
  function submitResponse()
  {
      var currentUser =  getCurrentUser(); 
      var currentResponseContentObject = $('#userResponseTextarea');
      var currentResponseContent = currentResponseContentObject.val();  
      console.log(currentResponseContentObject)
        Posts.insert({'responseContent':currentResponseContent, 'username':currentUser, timestamp: (new Date()).getTime()})
        var responseHistory = $('#responseHistory')
        responseHistory.animate({scrollTop: responseHistory[0].scrollHeight}, 1000)
      $('#userResponseTextarea').val("")
  }

  function approveResponse()
  {
      var currentUser =  getCurrentUser(); 
      var currentResponseContentObject = $('#userResponseTextarea');
      var currentResponseContent = currentChatContentObject.val();    
        teacherApprovedPostsPosts.insert(Posts.find({}, {sort: {timestamp: 1}}).fetch())
        var responseHistory = $('#responseHistory')
        responseHistory.animate({scrollTop: responseHistory[0].scrollHeight}, 1000)
  }

  Template.studentView.events({
    'click #submit': function () {            
      submitResponse()
    },
    
    'keydown #userResponseTextarea': function(keypressed)
    {
        if (keypressed.which == 13){
            event.preventDefault()
            submitResponse()
            
        }
    }    
  });



