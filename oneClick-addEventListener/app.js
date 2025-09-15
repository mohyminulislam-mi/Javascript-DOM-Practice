//We will try :-  onclick handler & addEventListener

// onclick function  'green and red colour'
function makeGreen(){
        document.body.style.backgroundColor = 'green';
    } 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// addEventListener
document.getElementById('purple').addEventListener('click', function makePurple(){
    document.body.style.backgroundColor = ('purple');
});

document.getElementById('yellow').addEventListener('click', function makeYellow(){
    document.body.style.backgroundColor = ('Yellow');
});
// use color code 
document.getElementById('gold').addEventListener('click', function makeGold(){
    document.body.style.backgroundColor = ('#A9A9A9')
});