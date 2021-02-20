// any element selector for first element same name
var box1 = document.querySelector('#box1'); 

// any element selector for all element same name
var boxAll = document.querySelectorAll('.box'); 
// node list to array convert
var boxNodeList = document.querySelectorAll('.box'); 
var boxArray = Array.prototype.slice.call(boxNodeList); 

// id selector
var box2 = document.getElementById('box2'); 


// class selector
var boxHTML = document.getElementsByClassName('box'); 
// HTML Collection to array
var boxArray2 = Array.prototype.slice.call(boxHTML); 

// select element for tag name 
var selectTag = document.getElementsByTagName('h4'); 

// select for attribute 
var attributeSelectQuery = document.querySelector('[data-atr="box1"]');
var allAtt = document.querySelectorAll('[data-atr="box1"], [data-atr="box4"]')


// pseudo class selector 
var pseudoClass = document.querySelector('li:first-child'); 


// children selector 
var parentElement = document.getElementById('box3'); 
parentElement.children; 
parentElement.childNodes; 
// console.dir(parentElement);



// parent select 
var box3p = document.querySelector('.box3-paragraph'); 
var box4p = box3p.parentNode.parentNode; 
// console.dir(box4p)


// parent to child
var parentToChild = document.querySelector('#box3 h4, #box4 li'); 

// just child
document.querySelectorAll('#box3>strong'); 


// bad diye select kora 
document.querySelectorAll('.box:not(#box3)');


// select akadhik element 
document.querySelector('.box, #box3 strong, #box3 li:last-child');