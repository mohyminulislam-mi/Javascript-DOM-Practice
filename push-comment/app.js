document.getElementById('btn').addEventListener('click', function(){
    const typeComments = document.getElementById('type-Comment');
    const newComment = typeComments.value;
    const commentBox = document.getElementById('comment-box');
    const commnetEl = document.createElement('p');
    commnetEl.innerText = newComment;

    commentBox.appendChild(commnetEl);
});