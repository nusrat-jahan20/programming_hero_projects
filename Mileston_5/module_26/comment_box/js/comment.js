// step-1: addEventListener to the button
document.getElementById('post-btn').addEventListener('click', function() {

    // step-2: get the comment inside the text area
    const newComment = document.getElementById('new-comment');
    const newCommentText = newComment.value;
    
    // step-3: set the comment inside the comment container

    // 1. get the comment container
    const commentBox = document.getElementById('comment-box');

    // 2. create a new element (p tag)
    const p = document.createElement('p');

    // 3. set the text of the comment as innerText of the p tag
    p.innerText = newCommentText;

    // 4. add the p tag using appendChild
    commentBox.appendChild(p);

    // step-4: clear the text area
    newComment.value = '';
})