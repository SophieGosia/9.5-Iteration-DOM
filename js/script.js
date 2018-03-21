//9.5 Exercise - iteration over all DOM elements 

var withButtonClass = document.getElementsByClassName('button');

for (var i = 0; i < withButtonClass.length; i++) {
    
   var element = withButtonClass[i];
   console.log(element.innerText);

}