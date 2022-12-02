let people = [];
// buttons
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');


// add event listener 
submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let = firstName = document.querySelector('#firstName').value;
    let = surname = document.querySelector('#surname').value;
    let = email = document.querySelector('#email').value;

    // push an object into an array
    people.push(
        {
            firstName,
            surname,
            email
        }
    )
    console.log(people);
    // local storage
    localStorage.setItem('data',JSON.stringify(people));
})

// display
display.addEventListener('click',(e)=> {
    e.preventDefault();
    console.log(
       JSON.parse(localStorage.getItem('data'))
    );
})