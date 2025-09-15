document.getElementById('click-update').addEventListener('click', function () {
    const pageTileChanged = document.getElementById('hello-user');
    pageTileChanged.innerText = 'This title is update!'
});

document.getElementById('login-btn').addEventListener('click', function(){
    const userNameChanged = document.getElementById('user-title');
    userNameChanged.innerText = 'Congratulation, login successful'
});