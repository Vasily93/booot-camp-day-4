// eslint-disable-next-line 
function greet(){
   
// get the first  input by id
    var firstNameInput = document.getElementById('first-name')
    console. log(firstName);

// get the last name by id
    var lastNameInput = document.getElementById('last-name')
    console. log(lastName);

// get valeus out of inputs
    var firstName= firstNameInput.value;
    var lastName=lastNameInput.value;

    console. log(firstName, lastName)

// make greeting

    var greeting= 'Hello ' + firstName +' '+ lastName + '!';
    console.log(greeting);

//display greeting

    var greeter= document. getElementById('greeting');console. log(greeter);
    greeter.textContent = greeting;

//remove prompt
}

// TODO: validate name inputs

