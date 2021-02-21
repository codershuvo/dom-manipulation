var selectABox = document.getElementById('box1'); 
// console.dir(selectABox);


// create new element
var newParagraph = document.createElement('p'); 
var newDiv = document.createElement('div'); 

var chacchu = 'Zawad Ahmed'; 
// add text for new element
newParagraph.textContent = "His name is: " + chacchu + "!"; 


// see text content 
newParagraph.textContent; 

// elemet a html dukano
newDiv.innerHTML = '<p>DOm Manipulation is fun</p>'

// add class for element 
newDiv.classList.add('new-div'); 

// old browser support 
newDiv.className += ' old-new-div'; 

// remove class for element 
newDiv.classList.remove('new-div'); 

// old browser remove 
newDiv.className = newDiv.className.replace(/old-new-div$/, ` `); 

// add attribute 
newDiv.setAttribute('data-attr', 'something'); 

// change or replace attribute value 
newDiv.setAttribute('data-attr', 'someOtherThing'); 

// remove attribute
newDiv.removeAttribute('data-attr'); 

// blank class attribute remove
newDiv.removeAttribute('class'); 




// change style for js
newDiv.style.backgroundColor = '#000'; 
newDiv.style.color = '#fff'; 
newDiv.style.backgroundColor = '#333'; 
newDiv.style.textAlign = 'center'; 

// remove style
newDiv.style.textAlign = '';


// add element for old element child
var box1 = document.getElementById('box1'); 
box1.insertAdjacentElement('afterbegin', newDiv);
box1.insertAdjacentElement('beforeend', newParagraph);


var box2 = document.getElementById('box2'); 
box2.insertAdjacentElement('beforebegin', newDiv);
box2.insertAdjacentElement('afterend', newParagraph);

// placement
box1.appendChild(box2);

var box1h4 = document.querySelector('#box1>h4'); 
box1.insertBefore(box2, box1h4)


// remove element 
newParagraph.previousSibling.remove();

box1.childNodes[1]; 
box1.childNodes[1].remove();

// parent child select to remove
box1.removeChild(box1h4);

document.getElementById('box3').remove();



