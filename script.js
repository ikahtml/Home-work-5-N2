 let Addbutton = document.getElementById('add-btn');

 let ClearButton = document.querySelector('.clear-btn');

 let ul = document.querySelector(".ul-list");

 let forminput = document.getElementById('form-input');

 let form = document.querySelector('.form-action');


 
 form.addEventListener('submit', function(event){
    event.preventDefault();
    let value = forminput.value;
    let li = document.createElement('li');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete This Item';
    deleteButton.addEventListener('click', function(){
        li.remove();
    })
    li.textContent = value;

    li.appendChild(deleteButton);
    ul.appendChild(li);

    forminput.value = '';

 })
   ClearButton.addEventListener('click', function(){
     ul.innerHTML = '';
   })
 
 
 
 
 
 
 
 
 
 
 


 
 
 
 
 

    
    
    
    
    
    











