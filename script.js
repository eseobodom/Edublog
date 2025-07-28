document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText) {
        const commentsDiv = document.getElementById('comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        commentInput.value = '';
        document.getElementById('comment-title').textContent = 'Your Comment:'
    } else {
        alert('Please enter a comment.');
    }
});

const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

function writeText(text){
    let index = 0;
    function writeNextLetter(){
        if(index < text.length){
            document.getElementById('txt').innerHTML += text.charAt(index);
            index++;
        }
        else{
            clearInterval(interval)
        }
    }
    let interval = setInterval(writeNextLetter, 100)
}
writeText('Welcome to Edublog Academy')


document.getElementById('redirect').addEventListener('click', () => {
    window.location.href = 'courses.html'
})