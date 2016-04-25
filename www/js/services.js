angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Buy groceries", details: "", added: new Date(), i: 0}
      , {title: "Clean house", details: "", added: new Date(), i: 1}
    ]
  };
  
//Add Task function - allows user to create a new task & enter title and details, also logs time and date when task was created
  function addTask(title, details) {
    data.tasks.push({title: title, details: details, added: new Date()});
  }
  
//Remove function - allows user to delete all tasks at once
  function removeAll(){
    data.tasks.splice(0, data.tasks.length);
  }
     

  return {
    data: data
    , addTask: addTask
    , removeAll: removeAll
    , complete: function (i){
      data.tasks.splice(data.tasks.indexOf(i), 1);
        
  }
       
  };
});