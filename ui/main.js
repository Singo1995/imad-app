var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Request to /counter
    
    //get the response and store it in a variable
    
    //Render the variable in the correct span
    counter+=1;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
};