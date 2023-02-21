function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

document.getElementById('apply-body-bg').addEventListener("click", function(){
  document.body.style.backgroundColor = randomColor();
});

document.getElementById('apply-bg').addEventListener('click', function() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightpink'
        friend.style.border = '2px solid red'
        friend.style.margin = '10px 0'
        friend.style.padding = '0 10px'
        friend.style.borderRadius = '10px'
    }
});

document.getElementById('center-third').addEventListener('click', function() {
    const thirdFrnd = document.getElementById('third-frnd');
    thirdFrnd.style.textAlign = 'center'
})

document.getElementById('new-friend').addEventListener('click', function() {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML = `
        <h3>New Friend</h3>
        <p>Some thing new added</p>
    `
    friend.classList.add('friend');
    friendContainer.appendChild(friend);
})