var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //create a request object
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
    if (request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }
    }
    }
    
    //make the request
    request.open('GET', 'http://surendersingh1995nov.imad.hasura-app.io/counter', true);
    request.send();
    
   };
   //get name
   var nameInput = document.getElementById('name');
   var name = nameInput.value;
   var submit = document.getElementById('submit_btn');
   submit.onclick = function(){
   //making request to the server to add the name
   
   //capture the response and convert into html
   var names = ["name1","name2","name3","name4"];
   var list = '';
   for(i = 0;i < name.length;i++){
   list += '<li>'+ names[i] + '</li>'
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML= list;
  };