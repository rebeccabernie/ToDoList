angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Buy groceries", details: "", added: new Date(), i: 0}
      , {title: "Clean house", details: "", added: new Date(), i: 1}
    ]
  };
  
  function addTask(title, details) {
    data.tasks.push({title: title, details: details, added: new Date()});
  }
  
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